const { statSync } = require('fs');

class StrapiCRUDService {
  /**
   * @type {import("@strapi/strapi").Strapi}
   * @param {Strapi} strapi
   * @param {Set<string>} interactModels
   */
  constructor(strapi, interactModels) {
    this.strapi = strapi;
    this.modelUIDs = strapi.db.config.models.reduce(
      (acc, { modelName, uid, kind = 'component' }) => {
        if (interactModels.has(modelName)) {
          acc[modelName] = {
            uid,
            kind
          };
        }

        return acc;
      },
      {}
    );
  }

  async uploadFile({ data, file }) {
    const { refId, ref, field } = data;
    const { name, path, type, extension } = file;

    const fileStat = statSync(path);

    const [uploadedFile] =
      await this.strapi.plugins.upload.services.upload.upload({
        data: {
          refId,
          ref,
          field
        },
        files: {
          path,
          name,
          type,
          extension,
          size: fileStat.size
        }
      });

    return uploadedFile;
  }

  async create(modelName, data) {
    return this.strapi.db.query(this.modelUIDs[modelName].uid).create({
      data
    });
  }

  async createMany(modelName, models) {
    return this.strapi.db.query(this.modelUIDs[modelName].uid).createMany({
      data: models
    });
  }

  async findMany(modelName, parameters) {
    return this.strapi.entityService.findMany(
      this.modelUIDs[modelName].uid,
      parameters
    );
  }

  async update(modelName, populateId, model) {
    return this.strapi.entityService.update(
      this.modelUIDs[modelName].uid,
      populateId,
      { data: model }
    );
  }

  async deleteMany(modelName, filter = {}) {
    return this.strapi.db
      .query(this.modelUIDs[modelName].uid)
      .deleteMany(filter);
  }
}

module.exports = StrapiCRUDService;
