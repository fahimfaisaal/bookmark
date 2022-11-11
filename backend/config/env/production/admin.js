module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET_PRODUCTION')
  },
  apiToken: {
    salt: env('API_TOKEN_SALT_PRODUCTION')
  }
});
