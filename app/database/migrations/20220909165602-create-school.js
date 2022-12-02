'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('schools', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_school: {
        type: Sequelize.STRING
      },
      cct: {
        type: Sequelize.STRING
      },
      nivel: {
        type: Sequelize.STRING
      },
      calle: {
        type: Sequelize.STRING
      },
      noExterior: {
        type: Sequelize.STRING
      },
      numeroInterior: {
        type: Sequelize.STRING
      },
      asentamiento: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      localidadId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'localidads',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      ubicacionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ubicacions',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      direcotId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'directors',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
     
    },
    
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('schools');
  }
};