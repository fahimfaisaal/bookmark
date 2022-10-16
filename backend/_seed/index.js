const { Strapi } = require("@strapi/strapi");
const { generateModel } = require('./helpers')


// this object will store all models ids, it will help us to connect random relation.
const modelIds = {
  users: [],
  books: [],
  languages: [],
  ratings: [],
  authors: [],
  publishers: [],
  tags: [],
  categories: [],
  variants: [],
  orders: [],
  carts: [],
  editions:[]
};


/**
 * it will rechive the strapi object and create dummy data with faker js.
 * @see - [Generate Dummy Data in Strapi](https://blog.andriishupta.dev/generate-dummy-data-in-strapi#heading-single-type)
 * @param {Strapi} strapi
 */
module.exports = async function (strapi) {
  for (const key in modelIds) {
    const modelName = key.replace(/s$/, '')
    const envName = `${modelName.toUpperCase()}_COUNT`
    let modelCount = process.env[envName] ?? 0

    while (modelCount--) {
      console.log(generateModel[modelName]())
    }
  }
  
  process.exit(0)
};


async function createModels() {

}

async function relateModels() {

}