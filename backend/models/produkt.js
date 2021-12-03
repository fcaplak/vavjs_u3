'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produkt extends Model {
    static associate(models) {
      this.hasMany(models.ObjednavkaDetail, { foreignKey: 'orderId'});
    }
  };
  Produkt.init({
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Produkt',
    timestamps: false,
    freezeTableName: true
  });
  return Produkt;
};