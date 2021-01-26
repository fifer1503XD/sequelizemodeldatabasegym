'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class membership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  membership.init({
    id_membership: DataTypes.INTEGER,
    name_membership: DataTypes.STRING,
    cost_membership: DataTypes.INTEGER,
    duration_days: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'membership',
  });
  return membership;
};