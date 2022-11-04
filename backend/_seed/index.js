const DbService = require('./classes/dbService');
const fs = require('node:fs/promises');
const path = require('node:path');
const yaml = require('yaml');

/**
 * @type {import("@strapi/strapi").Strapi}
 * @param {Strapi} strapi
 */
async function forceAction(strapi) {
  const seedYaml = await fs.readFile(path.resolve(__dirname, 'seed.yml'));
  const dbService = new DbService(strapi, yaml.parse(seedYaml.toString()));

  switch (process.env.FORCE_APP_BOOTSTRAP_ONLY_TO) {
    case 'SEED_MODELS':
      await dbService.seedModels();
      break;
    case 'RELATE_MODELS':
      await dbService.relateModels();
      break;
    case 'RESET_MODELS':
      await dbService.resetModels();
      break;
    case 'SEED_MEDIAS':
      await dbService.seedMedias();
      break;
    case 'RESET_MEDIAS':
      await dbService.resetMedias();
      break;
  }
}

module.exports = forceAction;
