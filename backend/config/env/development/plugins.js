/* eslint-disable linebreak-style */
module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d'
      },
      jwtSecret: env('JWT_SECRET')
    }
  }
})
