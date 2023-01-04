'use strict';
const bcrypt = require('bcrypt');
const authConfig = require('../../../config/auth');
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
     //username: 'admin',
      email: 'yobany@gmail.com',
      password: bcrypt.hashSync("12345678", +authConfig.rounds),
      roleId: 1,
      
    },
    {
     // username: 'will smith',
      email: 'kevin@gmail.com',
      password: bcrypt.hashSync("12345678", +authConfig.rounds),
      roleId: 2,
    },
    ]
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};