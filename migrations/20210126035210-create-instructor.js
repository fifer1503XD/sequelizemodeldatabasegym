'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('instructors', {
      id_instructor: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      name_instructor: {
        type: Sequelize.STRING
      },
      lastname_instructor: {
        type: Sequelize.STRING
      },
      phone_instructor: {
        type: Sequelize.BIGINT
      },
      email_instructor: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('instructors');
  }
};