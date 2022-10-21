const { Strapi } = require("@strapi/strapi");
const { generateModel, createModel, readFile, updateModel, findManyModel, deleteModel } = require('./helpers')
const relations = require('./relations')
const path = require('path')
const fs = require('fs/promises')
const { faker } = require('@faker-js/faker')
// this object will store all models ids, it will help us to connect random relation.
const modelIds = {
  user: [],
  book: [],
  language: [],
  rating: [],
  author: [],
  publisher: [],
  tag: [],
  category: [],
  variant: [],
  order: [],
  cart: []
};

const relateFuncs = {
  m2m: async (modelRelation, update) => {
    const { model, relateWith, max, min, labels: [label1, label2] } = modelRelation
    const memoizeLabel2 = {}

    for (const modelId of modelIds[model]) {
      const relationCount = faker.datatype.number({
        max,
        min
      })
      const shuffle = faker.helpers.shuffle(modelIds[relateWith])
      const relateModels = shuffle.slice(0, relationCount)

      await update(model, modelId, {
        [label1]: relateModels
      })

      for (const relateId of relateModels) {
        if (relateId in memoizeLabel2) {
          memoizeLabel2[relateId].push(modelId)
        } else {
          memoizeLabel2[relateId] = [modelId]
        }
      }
    }

    for (const relateId in memoizeLabel2) {
      await update(relateWith, relateId, {
        [label2]: memoizeLabel2[relateId]
      })
    }
  },
  o2m: async (modelRelation, update) => {
    const { model, relateWith, label } = modelRelation
    const relationModelIds = [...modelIds[relateWith]]

    for (const modelId of modelIds[model]) {
      const relateIndex = Math.floor(Math.random() * relationModelIds.length)

      await update(model, modelId, {
        [label]: relationModelIds.at(relateIndex)
      })
    }

  }
}

/**
 * it will receive the strapi object and create dummy data with faker js.
 * @see - [Generate Dummy Data in Strapi](https://blog.andriishupta.dev/generate-dummy-data-in-strapi#heading-single-type)
 * @param {Strapi} strapi
 */
const seed = async function (strapi) {
  console.info('🚀 start seeding')
  for (const modelName in modelIds) {
    const envName = `${modelName.toUpperCase()}_COUNT`
    let modelCount = process.env[envName] ?? 0

    if (modelCount) {
      await createModels(modelName, modelCount)
    }
  }
  console.info('✅ seed completed')
  await relateModels()

  async function createModels(modelName, modelCount) {
    console.info(`⌛️ creating ${modelCount} ${modelName} models`)
    const create = createModel(strapi)
    const users = []

    while (modelCount--) {
      try {
        const modelFakeData = generateModel[modelName]()
        if (modelName !== 'user') {
          const modelEntry = await create(modelName, modelFakeData)
          modelIds[modelName].push(modelEntry.id)
        } else {
          const user = await create(modelName, modelFakeData)
          users.push({
            email: user.email,
            username: user.username,
            password: modelFakeData.password
          })

          modelIds.user.push(user.id)
        }
      } catch (e) {
        console.log(e.message)
      }
    }

    console.info(`✅ ${modelName} models created successfully`)

    if (users.length) {
      await generateUserInfo(users)
    }
  }

  async function relateModels() {
    console.info('⌛️ start creating relation')
    const update = updateModel(strapi)
    
    for (const modelInfo of relations) {
      console.info(`↕️ relating ${modelInfo.model} with ${modelInfo.relateWith} in ${modelInfo.relationType} relation`)
      await relateFuncs[modelInfo.relationType](modelInfo, update)
    }
    console.info('✅ relation completed')
  }
  
  process.exit(0)
};

const reset = async (strapi) => {
  const findMany = findManyModel(strapi)
  const del = deleteModel(strapi)
  console.info(`⌛️ resetting db`)

  for (const modelName in modelIds) {
    const ids = await findMany(modelName, {
      fields: ['id']
    })

    if (ids.length) {
      console.info(`⌛️ deleting ${modelName}`)
      for (const { id } of ids) {
        await del(modelName, id)
      }
      console.info(`✅ delete all ${modelName} successfully`)
    }
  }

  console.info(`✅ reset db successfully`);

  process.exit(0)
}


async function generateUserInfo(users) {
  console.info(`⌛️ writing users info`)
  const resolvedPath = path.resolve(__dirname, 'user.info.json')
  
  try {
    const createdUsers = JSON.parse((await readFile(resolvedPath, '[]')).toString())
    await fs.writeFile(resolvedPath, JSON.stringify(createdUsers.concat(users), null, 2))
  } catch (e) {
    await fs.writeFile(resolvedPath, '[]')
    await generateUserInfo(users)
  }
  console.info(`✅ user info wrote successfully at ${resolvedPath}`)
}


module.exports = {
  seed,
  reset
}
