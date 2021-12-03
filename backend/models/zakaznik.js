'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Zakaznik extends Model {
    static associate(models) {
      this.hasOne(models.Objednavka, { foreignKey: 'customerId'});
    }
  };
  Zakaznik.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.STRING,
    city: DataTypes.STRING,
    postcode: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Zakaznik',
    timestamps: false,
    freezeTableName: true
  });
  return Zakaznik;
};