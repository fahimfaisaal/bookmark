const { faker } = require('@faker-js/faker');
const fs = require('fs/promises')

const uploadFile = async (strapi, {
  data,
  file,
}) => {
  const { refId, ref, field } = data
  const { name, path, type } = file

  const fileStat = statSync(path);

  const [uploadedFile] = await strapi.plugins.upload.services.upload.upload({
    data: {
      refId,
      ref,
      field
    },
    files: {
      path,
      name,
      type,
      size: fileStat.size,
    },
  });

  return uploadedFile
}

const uniqueFields = {
  user: 'plugin::users-permissions.user'
}

const createModel = (strapi,) =>
  async (modelName, model) =>
    strapi.entityService.create(uniqueFields[modelName] ?? `api::${modelName}.${modelName}`, { data: model })

const updateModel = (strapi) =>
  async (modelName, populate, model) =>
    await strapi.entityService.update(uniqueFields[modelName] ?? `api::${modelName}.${modelName}`, populate, { data: model })

const generateModel = {
  user: () => {
    const fullName = faker.name.fullName().split(/\s+/)
    const [firstName, lastName] = fullName
    const randStr = faker.random.alphaNumeric(5)

    return {
      firstName,
      lastName,
      username: faker.internet.userName(fullName, randStr).toLowerCase().replace(/\W/g, ''),
      email: faker.internet.email(fullName + randStr, lastName),
      password: faker.random.alphaNumeric(6),
      gender: faker.helpers.arrayElement(['male', 'female', 'others']).toUpperCase(),
      // birthDate: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
      phone: faker.phone.number('+8801#-########'),
      address: faker.address.country(), // TODO: create address function
    }
  },
  author: () => ({
    name: faker.name.fullName(),
    bio: faker.lorem.text(),
    birthDate: faker.date.birthdate({ min: 30, max: 65, mode: 'age' })
  }),
  publisher: () => {
    const name = faker.word.noun()
    return {
      name,
      bio: faker.lorem.text(),
      socials: ['facebook', 'twitter', 'linkedin'].map(socialName => `https://${socialName}.com/${name}`).join(','),
      website: faker.internet.domainName()
    }
  },
  rating: () => ({
    rate: faker.datatype.float({
      min: 0,
      max: 5
    }).toFixed(1),
    comment: faker.lorem.lines(3)
  }),
  tag: () => ({
    type: faker.word.noun()
  }),
  category: () => ({
    type: faker.word.noun()
  }),
  book: () => ({
    name: faker.commerce.productName(),
    publishedYear: faker.date.past(),
    status: faker.helpers.arrayElement(['in_stock', 'stock_out', 'coming_soon', 'pre_order']).toUpperCase(),
    description: faker.commerce.productDescription()
  }),
  variant: () => ({
    format: faker.helpers.arrayElement(['pdf', 'audio', 'hard_cover']),
    pageQuality: faker.helpers.arrayElement(['white_offset', 'white_or_natural', 'gloss_text', 'white_smooth_offset']).toUpperCase(),
    pageFormat: faker.helpers.arrayElement(['a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6']).toUpperCase(),
    price: faker.datatype.number({
      min: 30,
      max: 5e3
    }),
    discount: faker.datatype.number({
      min: 0,
      max: 60
    }),
    pageCount: faker.datatype.number({
      min: 50,
      max: 2e3
    })
  }),
  language: () => ({
    name: faker.random.locale()
  })
}

async function readFile(path, writePlaceholder) {
  try {
    return await fs.readFile(path);
  } catch {
    await fs.writeFile(path, writePlaceholder);
    return writePlaceholder;
  }
}

module.exports = {
  uploadFile,
  createModel,
  updateModel,
  generateModel,
  readFile
}