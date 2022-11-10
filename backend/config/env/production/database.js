/* eslint-disable linebreak-style */
const { parse } = require('pg-connection-string');

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env('DATABASE_URL'));

  return {
    connection: {
      client: 'postgres',
      connection: {
        host,
        port: port ?? 5432,
        database,
        user,
        password,
        ssl: true
      },
      debug: false
    }
  };
};
