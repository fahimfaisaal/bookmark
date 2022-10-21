const { generateModel, readFile } = require('../helpers')
const relations = require('../relations')
const path = require('path')
const fs = require('fs/promises')
const { faker } = require('@faker-js/faker');
const StrapiCRUDService = require("./strapiCRUDService");

class DbService {
  constructor(strapi, interactModels) {
    this.strapi = strapi
    this.modelIds = interactModels.reduce(
      (acc, modelName) => (acc[modelName] = [], acc),
      {}
    )
    this.entityService = new StrapiCRUDService(strapi, new Set(interactModels))
  }

  async #createModels(modelName, modelCount) {
    console.info(`⌛️ creating ${modelCount} ${modelName} models`)
    const users = []

    try {
      while (modelCount--) {
        const modelFakeData = generateModel[modelName]()
        const modelEntry = await this.entityService.create(modelName, modelFakeData)
        this.modelIds[modelName].push(modelEntry.id)

        modelName === 'user' && users.push({
          email: modelEntry.email,
          username: modelEntry.username,
          password: modelFakeData.password
        })
      }

      if (users.length) {
        this.#generateUserInfo(users)
      }
    } catch (e) {
      console.log(e.message)
      process.exit(0)
    }

    console.info(`✅ ${modelName} models created successfully`)
  }

  async #relateModels() {
    console.info('⌛️ start creating relation')

    for (const modelInfo of relations) {
      console.info(`↕️ relating ${modelInfo.model} with ${modelInfo.relateWith} in ${modelInfo.relationType} relation`)

      switch (modelInfo.relationType) {
        case 'm2m':
          await this.#relateManyToMany(modelInfo)
          break;
        case 'o2m':
          await this.#relateOneToMany(modelInfo)
      }
    }

    console.info('✅ relation completed')
  }

  async #generateUserInfo(users) {
    console.info(`⌛️ writing users info`)
    const resolvedPath = path.resolve(__dirname, 'user.info.json')

    try {
      const createdUsers = JSON.parse((await readFile(resolvedPath, '[]')).toString())
      await fs.writeFile(resolvedPath, JSON.stringify(createdUsers.concat(users), null, 2))
    } catch (e) {
      await fs.writeFile(resolvedPath, '[]')
      await this.#generateUserInfo(users)
    }

    console.info(`✅ user info wrote successfully at ${resolvedPath}`)
  }

  async #relateManyToMany(modelInfo) {
    const { model, relateWith, max, min, labels: [label1, label2] } = modelInfo
    const memoizeLabel2 = {}

    for (const modelId of this.modelIds[model]) {
      const relationCount = faker.datatype.number({
        max,
        min
      })
      const shuffle = faker.helpers.shuffle(this.modelIds[relateWith])
      const relateModels = shuffle.slice(0, relationCount)

      await this.entityService.update(model, modelId, {
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
      await this.entityService.update(relateWith, relateId, {
        [label2]: memoizeLabel2[relateId]
      })
    }
  }

  async #relateOneToMany(modelInfo) {
    const { model, relateWith, label } = modelInfo
    const relationModelIds = [...this.modelIds[relateWith]]

    for (const modelId of this.modelIds[model]) {
      const relateIndex = Math.floor(Math.random() * relationModelIds.length)

      await this.entityService.update(model, modelId, {
        [label]: relationModelIds.at(relateIndex)
      })
    }
  }

  async seed() {
    try {
      console.info('🚀 start seeding')
      for (const modelName in this.modelIds) {
        const envName = `${modelName.toUpperCase()}_COUNT`
        let modelCount = process.env[envName] ?? 0

        if (modelCount) {
          await this.#createModels(modelName, modelCount)
        }
      }
      console.info('✅ seed completed')

      await this.#relateModels()
    } catch (e) {
      throw e
    } finally {
      process.exit(0)
    }
  }

  async reset() {
    console.info(`⌛️ resetting db`)

    try {
      for (const modelName in this.modelIds) {
        const ids = await this.entityService.findMany(modelName, {
          fields: ['id']
        })

        if (ids.length) {
          console.info(`⌛️ deleting ${modelName}`)
          for (const { id } of ids) {
            await this.entityService.delete(modelName, id)
          }
          console.info(`✅ delete all ${modelName} successfully`)
        }
      }

      console.info(`✅ reset db successfully`);

      await fs.unlink(path.resolve(__dirname, 'user.info.json'))

      console.info('🗑️ delete user.info.json');
    } catch (e) {
      throw e
    } finally {
      process.exit(0)
    }
  }
}

module.exports = DbService