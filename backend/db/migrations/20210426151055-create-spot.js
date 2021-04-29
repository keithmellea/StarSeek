'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Spots", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      photos: {
        type: Sequelize.STRING(6000),
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
      hostId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      avg_Rating: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
      description: {
        type: Sequelize.TEXT(6000),
      },
      system: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      planet: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      region: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      arrangements: {
        type: Sequelize.TEXT(6000),
      },
      latitude: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      longitude: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Spots');
  }
};