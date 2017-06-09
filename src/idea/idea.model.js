const Sequelize = require('sequelize');
let _sequelize = null;
let createModel = function (sequelize = null) {
  if(_sequelize === null) {
    _sequelize = sequelize;
  }
  
  const IdeaModel = _sequelize.define('ideas', {
    name: Sequelize.STRING,
    description: Sequelize.TEXT
  })
  return IdeaModel;
}

module.exports = createModel;