const { Strapi } = require("@strapi/strapi");
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
};

/**
 * it will rechive the strapi object and create dummy data with faker js.
 * @see - [Generate Dummy Data in Strapi](https://blog.andriishupta.dev/generate-dummy-data-in-strapi#heading-single-type)
 * @param {Strapi} strapi
 */
module.exports = async function (strapi) {
  //
  console.log({ strapi });
};
