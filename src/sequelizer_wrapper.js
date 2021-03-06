
var fs = require('fs');

var Sequelize = require('sequelize');
var generateSQLite = function () {
  const uri = process.env.DATABASE_URI;
  const sequelize = new Sequelize(uri);

  var dir = './db/';
  /* eslint-disable no-sync */
  if (!fs.existsSync(dir)) {
    /* eslint-disable no-sync */
    fs.mkdirSync(dir);
  }

  return sequelize;
}

var generatePG = function () {
  const uri = process.env.DATABASE_URI;
  const sequelize = new Sequelize(uri);
  return sequelize;
}

var createSequelize = function () {
  if (process.env.NODE_ENV === 'production') {
    return generatePG();
  }
  return generateSQLite();
}

module.exports = createSequelize;
