/* eslint-disable linebreak-style */
module.exports = ({ env }) => ({
  app: {
    keys: env.array('APP_KEYS_PRODUCTION')
  }
});
