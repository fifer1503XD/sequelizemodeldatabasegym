'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('inscriptions', {
      id_inscription: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_users: {
        type: Sequelize.BIGINT
      },
      id_membership: {
        type: Sequelize.INTEGER
      },
      id_payment: {
        type: Sequelize.INTEGER
      },
      start_date: {
        type: Sequelize.DATE
      },
      finish_date: {
        type: Sequelize.DATE
      },
      inscription_date: {
        type: Sequelize.DATE
      },
      state_inscription: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('inscriptions');
  }
};