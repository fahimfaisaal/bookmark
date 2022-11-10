/* eslint-disable linebreak-style */
module.exports = ({ env }) => ({
  url: env('RENDER_EXTERNAL_URL'),
  app: {
    keys: env.array('APP_KEYS')
  }
});
