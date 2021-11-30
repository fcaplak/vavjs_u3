'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Produkt', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false
      }
    }),
      await queryInterface.bulkInsert('Produkt', [{
        title: "Yamaha CLP-665GP",
        image: "https://www.hudobny-dom.sk/galeria/3_36202/yamaha-clp-665-gp-pe-digitalni-klavir-original.jpg",
        price: 4611.5
      },
      {
        title: "Leonardo LC-1018",
        image: "https://i.cdn.nrholding.net/52544429/1000/1000",
        price: 349
        },
      {
        title: "Pearl RS505C Roadshow",
        image: "https://muzikercdn.com/uploads/products/546/54671/main_ead0245e.jpg",
        price: 489
      }
      ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Produkt');
  }
};