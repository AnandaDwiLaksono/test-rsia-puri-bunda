'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Positions', [
      {
        name: 'Staff',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Supervisor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Manager',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Director',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vice President',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'President',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CEO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CFO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CTO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'COO',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Positions', null, {});
  }
};
