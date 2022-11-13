/* eslint-disable linebreak-style */
module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '3d'
      },
      jwtSecret: env('JWT_SECRET_PRODUCTION')
    }
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET')
      }
    }
  }
});
