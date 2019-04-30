module.exports = {
    development: {
      client: 'sqlite3',
      useNullAsDefault: true,
      connection: {
        filename: './data/sleep4good.db3',
      },
      migrations: {
        directory: './data/migrations',
        tableName: 'knex_migrations',
      },
      seeds: {
        directory: './data/seeds',
      },
    },
    production: {
      client: 'pg',
      connection: {
        filename: './data/sleep4good.db3',
      },
      migrations: {
          directory: __dirname + '/data/migrations',
      },
      seeds: {
          directory: __dirname + '/data/seeds/',
      },
    },
  };
  