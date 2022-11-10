/* eslint-disable linebreak-style */
module.exports = ({ env }) =>
  Object.assign(
    {
      'users-permissions': {
        config: {
          jwt: {
            expiresIn: '7d'
          }
        }
      }
    },
    process.env.NODE_ENV === 'production' && {
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
    }
  );
