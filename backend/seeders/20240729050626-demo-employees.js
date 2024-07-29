'use strict';

const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const password1 = await bcrypt.hash('password1', 10);
    const password2 = await bcrypt.hash('password2', 10);
    const password3 = await bcrypt.hash('password3', 10);
    const password4 = await bcrypt.hash('password4', 10);
    const password5 = await bcrypt.hash('password5', 10);
    const password6 = await bcrypt.hash('password6', 10);
    const password7 = await bcrypt.hash('password7', 10);
    const password8 = await bcrypt.hash('password8', 10);
    const password9 = await bcrypt.hash('password9', 10);
    const password10 = await bcrypt.hash('password10', 10);

    await queryInterface.bulkInsert('Employees', [
      {
        name: 'Employee 1',
        username: 'employee1',
        password: password1,
        joinedDate: new Date(),
        unitId: 41,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Employee 2',
        username: 'employee2',
        password: password2,
        joinedDate: new Date(),
        unitId: 42,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Employee 3',
        username: 'employee3',
        password: password3,
        joinedDate: new Date(),
        unitId: 43,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Employee 4',
        username: 'employee4',
        password: password4,
        joinedDate: new Date(),
        unitId: 44,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Employee 5',
        username: 'employee5',
        password: password5,
        joinedDate: new Date(),
        unitId: 45,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Employee 6',
        username: 'employee6',
        password: password6,
        joinedDate: new Date(),
        unitId: 46,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Employee 7',
        username: 'employee7',
        password: password7,
        joinedDate: new Date(),
        unitId: 47,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Employee 8',
        username: 'employee8',
        password: password8,
        joinedDate: new Date(),
        unitId: 48,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Employee 9',
        username: 'employee9',
        password: password9,
        joinedDate: new Date(),
        unitId: 49,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Employee 10',
        username: 'employee10',
        password: password10,
        joinedDate: new Date(),
        unitId: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Employees', null, {});
  }
};
