'use strict';

const generateLogins = () => {
  const logins = []

  for (let i = 0; i < 200; i++) {
    logins.push({
      employeeId: Math.floor(Math.random() * 10) + 31,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }

  return logins
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Logins', generateLogins(), {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Logins', null, {})
  }
};
