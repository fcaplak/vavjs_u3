'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Objednavka extends Model {
    static associate(models) {
      this.hasMany(models.ObjednavkaDetail, { as: 'products', foreignKey: 'orderId'});
      this.belongsTo(models.Zakaznik, {as : 'customer', foreignKey: 'customerId'});
    }
  };  

  Objednavka.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
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