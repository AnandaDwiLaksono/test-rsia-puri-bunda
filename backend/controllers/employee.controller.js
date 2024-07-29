const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Employee, Unit, Position, EmployeePosition } = require('../models');

const createEmployee = async (req, res) => {
  const { name, username, password, unitId, positionId } = req.body;

  const employee = await Employee.findOne({
    where: {
      username
    }
  });

  if (employee) {
    return res.status(400).json({
      message: 'Username already exists'
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  Employee.create({
    name,
    username,
    password: hashedPassword,
    unitId,
  }).then((data) => {
    for (let i = 0; i < positionId.length; i++) {
      EmployeePosition.create({
        employeeId: data.id,
        positionId: positionId[i]
      });
    }

    return res.status(201).json({
      message: 'Employee created successfully',
      data: { data, positionId }
    });
  }).catch((err) => {
    return res.status(400).json({ error: err.message });
  });
}

const getEmployees = async (req, res) => {
  Employee.findAll({
    include: [
      {
        model: Unit,
        attributes: ['name']
      },
      {
        model: EmployeePosition,
        include: [
          {
            model: Position,
            attributes: ['name']
          }
        ]
      }
    ]
  }).then((data) => {
    return res.status(200).json({
      message: 'Get all employees',
      data
    });
  }).catch((err) => {
    return res.status(500).json({ error: err.message });
  });
}

const getEmployee = async (req, res) => {
  Employee.findByPk(req.params.id, {
    include: [
      {
        model: Unit,
        attributes: ['name']
      },
      {
        model: EmployeePosition,
        include: [
          {
            model: Position,
            attributes: ['name']
          }
        ]
      }
    ]
  }).then((data) => {
    if (!data) {
      return res.status(404).json({
        message: 'Employee not found'
      });
    }

    return res.status(200).json({
      message: 'Get employee by id',
      data
    });
  }).catch((err) => {
    return res.status(400).json({ error: err.message });
  });
}

const updateEmployee = async (req, res) => {
  Employee.findByPk(req.params.id).then((data) => {
    if (!data) {
      return res.status(404).json({
        message: 'Employee not found'
      });
    }

    data.update({
      name: req.body.name,
      unitId: req.body.unitId
    }).then((data) => {
      return res.status(200).json({
        message: 'Employee updated successfully',
        data
      });
    }).catch((err) => {
      return res.status(400).json({ error: err.message });
    });
  });
}

const deleteEmployee = async (req, res) => {
  Employee.findByPk(req.params.id).then((data) => {
    if (!data) {
      return res.status(404).json({
        message: 'Employee not found'
      });
    }

    data.destroy().then(() => {
      return res.status(200).json({
        message: 'Employee deleted successfully'
      });
    }).catch((err) => {
      return res.status(400).json({ error: err.message });
    });
  });
}

module.exports = {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee
};
