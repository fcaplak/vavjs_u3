'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reklama', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      link: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false
      },
      counter: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    }),
    await queryInterface.bulkInsert('Reklama', [{
        link: "https://www.docker.com/",
        image: "https://www.threatstack.com/wp-content/uploads/2017/06/docker-cloud-twitter-card.png",
        counter: 0
    }]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Reklama');
  }
};