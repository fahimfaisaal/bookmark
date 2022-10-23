const DbService = require('./classes/dbService')

/**
 * @type {import("@strapi/strapi").Strapi}
 * @param {Strapi} strapi 
 */
async function forceAction(strapi) {
  const interactModels = [
    'user',
    'author',
    'book',
    'category',
    'tag',
    'language',
    'publisher',
    'variant',
    'rating'
  ]
  const dbService = new DbService(strapi, interactModels)

  switch (process.env.FORCE_APP_BOOTSTRAP_ONLY_TO) {
    case 'seed':
      await dbService.seed()
      break
    case 'reset-db':
      await dbService.reset()
  }
}

module.exports = forceAction
