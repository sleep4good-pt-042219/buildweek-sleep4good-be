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
      useNullAsDefault: true,
      connection: process.env.DATABASE_URL,
      migrations: {
          directory: __dirname + '/data/migrations',
      },
      seeds: {
          directory: __dirname + '/data/seeds/',
      },
    },
    testing: {
      client: 'sqlite3',
      connection: {
        filename: './data/test.db3',
      },
      migrations: {
        directory: __dirname + '/data/migrations',
      },
      seeds: {
        directory: __dirname + '/data/seeds/',
      },
      useNullAsDefault: true
    },
  };
  