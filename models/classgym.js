'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class classgym extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  classgym.init({
    id_class: DataTypes.INTEGER,
    name_class: DataTypes.STRING,
    id_instructor: DataTypes.BIGINT,
    date_class: DataTypes.DATE,
    time_class: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'classgym',
  });
  return classgym;
};