/* eslint-disable linebreak-style */
const { parse } = require('pg-connection-string');

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(
    env('DATABASE_URL_PRODUCTION')
  );

  return {
    connection: {
      client: 'postgres',
      connection: {
        host,
        port: port ?? env.int('PORT_PRODUCTION', 5432),
        database,
        user,
        password,
        schema: env('DATABASE_SCHEMA', 'public'),
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false)
        }
      }
    }
  };
};
