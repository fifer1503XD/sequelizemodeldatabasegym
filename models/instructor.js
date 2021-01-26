'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class instructor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  instructor.init({
    id_instructor: DataTypes.BIGINT,
    name_instructor: DataTypes.STRING,
    lastname_instructor: DataTypes.STRING,
    phone_instructor: DataTypes.BIGINT,
    email_instructor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'instructor',
  });
  return instructor;
};