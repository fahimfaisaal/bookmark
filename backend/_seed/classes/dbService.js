const generateModel = require('../generateModel');
const { faker } = require('@faker-js/faker');
const StrapiService = require('./strapiService');
const { getFiles } = require('../helpers');
const { resolve } = require('path');
const fs = require('fs');

class DbService {
  /**
   * @type {import("@strapi/strapi").Strapi}
   * @param {Strapi} strapi
   * @param {Array<string>} interactModels
   */
  constructor(strapi, models) {
    this.strapi = strapi;
    this.models = models;
    this.modelIdMap = models.reduce(
      (acc, { modelName }) => ((acc[modelName] = []), acc),
      {}
    );
    this.strapiService = new StrapiService(
      strapi,
      new Set(Object.keys(this.modelIdMap))
    );
  }

  /**
   * this function create a model by specific model name
   * @param {string} modelName - the name of model
   * @param {number} modelCount
   */
  async #createCollectionModels(modelName, modelCount) {
    console.info(`⌛️ creating ${modelCount} ${modelName} models`);
    const models = [];

    while (modelCount--) {
      models.push({
        ...generateModel[modelName](this.strapi),
        publishedAt: new Date()
      });
    }

    await this.strapiService.createMany(modelName, models);
    console.info(`✅ ${modelName} models created successfully`);
  }

  async #createSingleModel(modelName) {
    console.info(`⌛️ creating ${modelName} model`);
    const response = await this.strapiService.create(modelName, {
      data: {
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });

    await this.strapiService.update(
      modelName,
      response.id,

      { ...generateModel[modelName](strapi), publishedAt: new Date() }
    );
    console.info(`✅ ${modelName} model created successfully`);
  }

  /**
   * @param {string} modelName - the model name
   * @typedef RelateInfoM2M
   * @property {string} relateWith - the model to relate with
   * @property {[string, string]} labels - the plural name of relate model & model
   * @property {number} max
   * @property {number} min
   * @param {RelateInfoM2M} relateInfo
   */
  async #relateManyToMany(modelName, relateInfo) {
    const {
      relateWith,
      max,
      min,
      labels: [label1, label2]
    } = relateInfo;
    const memoizeLabel2 = {};

    for (const modelId of this.modelIdMap[modelName]) {
      const relationCount = faker.datatype.number({
        max,
        min
      });
      const shuffle = faker.helpers.shuffle(this.modelIdMap[relateWith]);
      const relateModels = shuffle.slice(0, relationCount);

      await this.strapiService.update(modelName, modelId, {
        [label1]: relateModels
      });

      for (const relateId of relateModels) {
        if (relateId in memoizeLabel2) {
          memoizeLabel2[relateId].push(modelId);
        } else {
          memoizeLabel2[relateId] = [modelId];
        }
      }
    }

    for (const relateId in memoizeLabel2) {
      await this.strapiService.update(relateWith, relateId, {
        [label2]: memoizeLabel2[relateId]
      });
    }
  }

  /**
   * @param {string} modelName - the model name
   * @typedef ModelInfoO2M
   * @type {Object}
   * @property {string} relateWith - the model to relate with
   * @property {string} labels- the plural name of relate model
   * @param {ModelInfoO2M} relationInfo
   */
  async #relateOneToMany(modelName, relationInfo) {
    const { relateWith, label, max = 0, min = 0 } = relationInfo;
    const relationModelIds = [...this.modelIdMap[relateWith]];

    for (const modelId of this.modelIdMap[modelName]) {
      if (max || min) {
        const shuffleArray = faker.helpers.shuffle(relationModelIds);
        const randIndex = faker.datatype.number({
          min,
          max: Math.min(max, relationModelIds.length)
        });

        await this.strapiService.update(modelName, modelId, {
          [label]: shuffleArray.slice(0, randIndex)
        });
      } else {
        const relateIndex = Math.floor(Math.random() * relationModelIds.length);

        await this.strapiService.update(modelName, modelId, {
          [label]: relationModelIds.at(relateIndex)
        });
      }
    }
  }

  async seedModels() {
    try {
      console.info('🚀 start seeding');
      for (const { modelName, count } of this.models) {
        if (this.strapiService.modelUIDs[modelName].kind === 'singleType') {
          await this.#createSingleModel(modelName);
        } else {
          await this.#createCollectionModels(modelName, count);
        }
      }
      console.error('✅ seed completed');
    } catch (e) {
      console.log(e.message);
    }
  }

  /**
   * this function relate all models based on this.modelIdMap
   */
  async relateModels() {
    try {
      console.info('⌛️ start creating relation');

      for (const modelName in this.modelIdMap) {
        if (this.strapiService.modelUIDs[modelName].kind === 'collectionType') {
          this.modelIdMap[modelName] = (
            await this.strapiService.findMany(modelName, {
              fields: ['id']
            })
          ).map(({ id }) => id);
        }
      }

      for (const { modelName, relations } of this.models) {
        for (const relationInfo of relations ?? []) {
          console.info(
            `↕️ relating ${modelName} with ${relationInfo.relateWith} in ${relationInfo.type} relation`
          );

          switch (relationInfo.type) {
            case 'm2m':
              await this.#relateManyToMany(modelName, relationInfo);
              break;
            case 'o2m':
              await this.#relateOneToMany(modelName, relationInfo);
          }
        }
      }

      console.info('✅ relation completed');
    } catch (e) {
      console.error(e.message);
    }
  }

  async resetModels() {
    try {
      console.info('⌛️ resetting models');

      for (const { modelName } of this.models) {
        console.info(`⌛️ deleting ${modelName}`);
        await this.strapiService.deleteMany(modelName);
        console.info(`✅ delete all ${modelName} successfully`);
      }

      console.info('✅ reset models successfully');
    } catch (e) {
      console.error(e);
    }
  }

  async seedMedias() {
    try {
      const mediaMap = new Map();
      console.info('⌛️ uploading medias');
      for (const { modelName, medias } of this.models.filter(
        (model) => model.medias
      )) {
        for (const media of medias) {
          const { fieldName, path, type, multi } = media;
          const exactPath = resolve(process.cwd(), ...path.split('/'));
          const files = getFiles(exactPath);

          for (const { basename, ext } of files) {
            const uploadFile = await this.strapiService.uploadFile({
              data: {
                refId: faker.datatype.number({ min: 1, max: 1e5 }), // random id
                ref: this.strapiService.modelUIDs[modelName].uid, // pointing any model
                field: fieldName
              },
              file: {
                path: resolve(exactPath, basename),
                name: basename,
                type: `${type ? type + '/' : ''}${ext}`
              }
            });
            const modelKey = `${modelName}:${fieldName}`;

            if (mediaMap.has(modelKey)) {
              mediaMap.get(modelKey).ids.push(uploadFile.id);
            } else {
              mediaMap.set(
                modelKey,
                Object.assign(
                  { ids: [uploadFile.id] },
                  multi && { max: media.max, min: media.min }
                )
              );
            }
          }
        }
      }
      console.info('✅ upload media successfully');

      console.info('⌛️ relating medias');
      for (const [mediakey, { max, min, ids }] of mediaMap) {
        const [modelName, fieldName] = mediakey.split(':');
        const modelIds = (await this.strapiService.findMany(modelName)).map(
          ({ id }) => id
        );

        for (const id of modelIds) {
          if (max || min) {
            await this.strapiService.update(modelName, id, {
              [fieldName]: faker.helpers.arrayElements(
                ids,
                faker.datatype.number({ max, min })
              )
            });
          } else {
            await this.strapiService.update(modelName, id, {
              [fieldName]: faker.helpers.arrayElement(ids)
            });
          }
        }
      }
      console.info('✅ releate medias completed');
    } catch (e) {
      console.log(e.message);
    }
  }

  async resetMedias() {
    try {
      console.info('⌛️ start resetting medias');
      const ids = await strapi.plugins.upload.services.upload.findMany();

      for (const { id } of ids) {
        await strapi.plugins.upload.services.upload.remove({ id });
      }
      console.info('✅ reset media successfully');

      console.info('⌛️ deleting uploaded medias');
      const uploadFilePath = resolve(process.cwd(), 'public', 'uploads');
      const uploadFiles = getFiles(uploadFilePath);

      for (const file of uploadFiles) {
        if (file.basename !== '.gitkeep') {
          fs.unlinkSync(resolve(uploadFilePath, file.basename));
        }
      }
      console.info('✅ delete uploaded medias');
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = DbService;
