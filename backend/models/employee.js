'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Unit, {
        foreignKey: 'unitId'
      });
      this.belongsToMany(models.Position, {
        through: 'EmployeePosition',
        foreignKey: 'employeeId'
      });
    }
  }
  Employee.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    joinedDate: DataTypes.DATE,
    unitId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};