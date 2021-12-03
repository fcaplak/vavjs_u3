'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ObjednavkaDetail extends Model {
    static associate(models) {
      this.belongsTo(models.Objednavka, { foreignKey: 'orderId'});
      this.belongsTo(models.Produkt, { foreignKey: 'productId'});
    }
  };
  ObjednavkaDetail.init({
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ObjednavkaDetail',
    timestamps: false,
    freezeTableName: true
  });
  return ObjednavkaDetail;
};