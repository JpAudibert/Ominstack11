"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("incidents", { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      description: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },

      value:{
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },

      ong_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ongs',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    return queryInterface.dropTable("incidents");
  }
};
