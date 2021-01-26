'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class inscription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  inscription.init({
    id_inscription: DataTypes.INTEGER,
    id_users: DataTypes.BIGINT,
    id_membership: DataTypes.INTEGER,
    id_payment: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    finish_date: DataTypes.DATE,
    inscription_date: DataTypes.DATE,
    state_inscription: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'inscription',
  });
  return inscription;
};