const { statSync } = require("fs");
const { join } = require("path");
class StrapiCRUDService {
  /**
   * @type {import("@strapi/strapi").Strapi}
   * @param {Strapi} strapi
   * @param {Set<string>} interactModels
   */
  constructor(strapi, interactModels) {
    this.strapi = strapi;
    this.modelUIDs = strapi.db.config.models.reduce(
      (acc, { modelName, uid }) => {
        if (interactModels.has(modelName)) {
          acc[modelName] = uid;
        }

        return acc;
      },
      {}
    );
  }

  async #uploadFile({ data, file }) {
    const { refId, ref, field } = data;
    const { name, path, type } = file;

    const fileStat = statSync(path);

    const [uploadedFile] =
      await this.strapi.plugins.upload.services.upload.upload({
        data: {
          refId,
          ref,
          field,
        },
        files: {
          path,
          name,
          type,
          size: fileStat.size,
        },
      });

    return uploadedFile;
  }

  async imageFileUpload(pathName, imgName) {
    const uploadedTodoMedia = await this.#uploadFile({
      data: {
        refId: 45, //random id
        ref: "api::book.book",  //pointing any model
        field: 'image',
      },
      file: {
        path: join(__dirname, pathName),
        name: imgName,
        type: "image/png",
      },
    });
    return uploadedTodoMedia;
  }
/**
 * Image Id contain
 * @returns 
 */
  async imageFileUploadLists() {
    let imageFileLists = []
    let media;
    // TODO: this will be refactoring later (object shape)
    media =await this.imageFileUpload("../../public/uploads/category.png", "category.png")
    imageFileLists.push(media.id)
    media =await this.imageFileUpload("../../public/uploads/books1.png", "books.png")
    imageFileLists.push(media.id)
    media =await this.imageFileUpload("../../public/uploads/books2.png", "books_2.png")
    imageFileLists.push(media.id)
    media =await this.imageFileUpload("../../public/uploads/author.png", "author.png")
    imageFileLists.push(media.id)
    media =await this.imageFileUpload("../../public/uploads/user.png", "user.png")
    imageFileLists.push(media.id)
    

    return imageFileLists
  }

  async create(modelName, model) {
    return this.strapi.entityService.create(this.modelUIDs[modelName], {
      data: {
        ...model,
        publishedAt: new Date(),
      },
    });
  }

  async findMany(modelName, parameters) {
    return this.strapi.entityService.findMany(
      this.modelUIDs[modelName],
      parameters
    );
  }

  async update(modelName, populateId, model) {
    return this.strapi.entityService.update(
      this.modelUIDs[modelName],
      populateId,
      { data: model }
    );
  }

  async delete(modelName, populateId) {
    return strapi.entityService.delete(this.modelUIDs[modelName], populateId);
  }
}

module.exports = StrapiCRUDService;
