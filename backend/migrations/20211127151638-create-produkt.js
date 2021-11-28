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
        title: "Cpavok",
        image: "http://cpavok.sk",
        price: 5.50
      },
      {
        title: "Cpavok2",
        image: "http://cpavok2.sk",
        price: 8.7
        },
      {
        title: "Cpavok2",
        image: "http://cpavok2.sk",
        price: 8.7
      }
      ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Produkt');
  }
};