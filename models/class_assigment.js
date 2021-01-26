'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class class_assigment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  class_assigment.init({
    id_users: DataTypes.BIGINT,
    id_class: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'class_assigment',
  });
  return class_assigment;
};