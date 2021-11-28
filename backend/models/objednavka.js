'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Objednavka extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Objednavka.belongsTo(models.ObjednavkaDetail);
    }
  };
  Objednavka.init({
    customerId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Objednavka',
    timestamps: false,
    freezeTableName: true
  });
  return Objednavka;
};