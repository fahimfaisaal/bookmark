class StrapiCRUDService {
/**
 * @type {import("@strapi/strapi").Strapi}
 * @param {Strapi} strapi
 * @param {Set<string>} interactModels
 */
  constructor(strapi, interactModels) {
    this.strapi = strapi
    this.modelUIDs = strapi.db.config.models.reduce(
      (acc, { modelName, uid }) => {
        if (interactModels.has(modelName)) {
          acc[modelName] = uid
        }

        return acc
      },
      {}
    )
  }

  async create(modelName, model) {
    return this.strapi.entityService.create(
      this.modelUIDs[modelName], {
        data: {
          ...model,
          publishedAt: new Date()
        }
      }
    )
  }
  
  async findMany(modelName, parameters) {
    return this.strapi.entityService.findMany(this.modelUIDs[modelName], parameters)
  }
  
  async update(modelName, populateId, model) {
    return this.strapi.entityService.update(
      this.modelUIDs[modelName],
      populateId,
      { data: model }
    )
  }
  
  async delete(modelName, populateId) {
    return strapi.entityService.delete(this.modelUIDs[modelName], populateId)
  }
}

module.exports = StrapiCRUDService