"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("ongs", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false
      },

      whatsApp: {
        type: Sequelize.STRING,
        allowNull: false
      },

      city: {
        type: Sequelize.STRING,
        allowNull: false
      },

      uf: {
        type: Sequelize.STRING(2),
        allowNull: false
      },

      credential: {
        type: Sequelize.STRING,
        allowNull: false
      },

      // ↓↓↓ IT'S MANDATORY ↓↓↓
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("ongs");
  }
};
