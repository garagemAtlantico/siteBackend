const Sequelize = require('sequelize');
let _sequelize = null;
let createModel = function (sequelize = null) {
  if(_sequelize === null) {
    _sequelize = sequelize;
  }

  const IdeaModel = _sequelize.define('ideas', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: Sequelize.STRING,
    description: Sequelize.TEXT
  })
  return IdeaModel;
}

module.exports = createModel;
