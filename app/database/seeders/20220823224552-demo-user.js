'use strict';
const bcrypt = require('bcrypt');
const authConfig = require('../../../config/auth');
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
     //username: 'admin',
      full_name: 'MARÍA ELGAR VÁZQUEZ',
      email: 'yobany@gmail.com',
      password: bcrypt.hashSync("12345678", +authConfig.rounds),
      number_phone: 'S/N',
      oficina: 'OR ITSMO',
      roleId: 1,
      
    },
    {
     // username: 'will smith',
      full_name: 'MARÍA DE JESÚSMELGAR VÁZQUEZ',
      email: 'kevin@gmail.com',
      password: bcrypt.hashSync("12345678", +authConfig.rounds),
      number_phone: 'S/N',
oficina: 'OR ITSMO',
      roleId: 1,
    },
    ]
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};