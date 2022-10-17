const { Strapi } = require("@strapi/strapi");
const { generateModel, createModel, readFile, updateModel } = require('./helpers')
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
};

const relateFuncs = {
  o2m: async (modelRelation, update) => {
    const { model, relateWith, max, min, unique, label } = modelRelation
    let relationCount = faker.datatype.number({
      max,
      min
    })
    let relationModelIds = [...modelIds[relateWith]]

    if (relationCount > relationModelIds.length) {
      relationCount = relationModelIds.length
    }

    for (const modelId of modelIds[model]) {
      if (relationModelIds.length === 0) {
        break
      }
      const shuffle = faker.helpers.shuffle(relationModelIds)
      const relateModels = shuffle.splice(0, relationCount)

      await update(model, modelId, {
        [label]: relateModels
      })

      if (unique) {
        relationModelIds = shuffle
      }
    }
  },
  m2m: async (modelRelation, update) => {
    const { model, relateWith, max, min, labels: [label1, label2] } = modelRelation
    let relationCount = faker.datatype.number({
      max,
      min
    })
    let relationModelIds = [...modelIds[relateWith]]

    if (relationCount > relationModelIds.length) {
      relationCount = relationModelIds.length
    }

    for (const modelId of modelIds[model]) {
      if (relationModelIds.length === 0) {
        break
      }
      const shuffle = faker.helpers.shuffle(relationModelIds)
      const relateModels = shuffle.splice(0, relationCount)

      await update(model, modelId, {
        [label1]: relateModels
      })

      for (const relateId of relateModels) {
        await update(relateWith, relateId, {
          [label2]: modelId
        })
      }
    }
  }
}

/**
 * it will receive the strapi object and create dummy data with faker js.
 * @see - [Generate Dummy Data in Strapi](https://blog.andriishupta.dev/generate-dummy-data-in-strapi#heading-single-type)
 * @param {Strapi} strapi
 */
module.exports = async function (strapi) {
  console.info('🚀 start seeding')
  for (const modelName in modelIds) {
    const envName = `${modelName.toUpperCase()}_COUNT`
    let modelCount = process.env[envName] ?? 0

    if (modelCount) {
      await createModels(modelName, modelCount)
      await relateModels()
    }
  }
  console.info('✅ seed completed')

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
      await relateFuncs[modelInfo.relationType](modelInfo, update)
    }
  }
  
  process.exit(0)
};


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
