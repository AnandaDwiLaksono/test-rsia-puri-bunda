'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeePosition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Employee, {
        foreignKey: 'employeeId'
      });
      this.belongsTo(models.Position, {
        foreignKey: 'positionId'
      });
    }
  }
  EmployeePosition.init({
    employeeId: DataTypes.INTEGER,
    positionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EmployeePosition',
  });
  return EmployeePosition;
};