'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Zakaznik extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Zakaznik.belongsTo(models.ObjednavkaDetail);
    }
  };
  Zakaznik.init({
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