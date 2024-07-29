'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Units', [
      {
        name: 'IT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'HR',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Finance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Marketing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sales',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Production',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Logistic',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Legal',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Customer Service',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Research and Development',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Units', null, {});
  }
};
