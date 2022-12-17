'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Localidad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Localidad.init({
    nameLoc:{
      type: DataTypes.STRING
    },
    claveLocOfi: {
      type: DataTypes.INTEGER,
      unique: true
    },
    municipioId:{
      type: DataTypes.INTEGER,
      references: {
        model: 'municipios',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'localidad',
  });
  Localidad.associate = function(models) {
    Localidad.belongsTo(models.municipio, {
      foreignKey: 'municipioId',
      targetId: 'id',
      as: 'municipio'
    });

      Localidad.hasMany(models.school, {
        foreignKey: 'localidadId',
        targetId: 'id',
        //as: 'school'
      });
     
   
     Localidad.hasOne(models.sare, {
        foreignKey: 'localidadId',
        key: 'id' 
      });
  }
  return Localidad;
};