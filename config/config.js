const path = require('path');
require(path.resolve('config', 'load_config.js'));

console.log(process.env.DATABASE_DIALECT)
module.exports = {
  dev: {
    uri: process.env.DATABASE_URI,
    dialect: process.env.DATABASE_DIALECT,
    storage: process.env.DATABASE_STORAGE
  },
  test: {
    uri: process.env.DATABASE_URI,
    dialect: process.env.DATABASE_DIALECT,
    storage: process.env.DATABASE_STORAGE
  },
  production: {
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      host: process.env.DATABASE_HOST,
      dialect: process.env.DATABASE_DIALECT
  }
};
