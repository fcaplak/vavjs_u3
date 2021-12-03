'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reklama extends Model {
    static associate(models) {
    }
  };
  Reklama.init({
    link: DataTypes.STRING,
    image: DataTypes.STRING,
    counter: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reklama',
    timestamps: false,
    freezeTableName: true
  });
  return Reklama;
};