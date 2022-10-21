const { seed, reset } = require("../_seed");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    switch (process.env.FORCE_APP_BOOTSTRAP_ONLY_TO) {
      case 'seed':
        await seed(strapi)
        break
      case 'reset-db':
        await reset(strapi)
        break
    }
  },
};
