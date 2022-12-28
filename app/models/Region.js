'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Region extends Model {
    
    static associate(models) {
      Region.belongsToMany(models.sare, {
      through: 'regionsares'
    });
    }
  }
  Region.init({
    nameRegion: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'region',
  });
   
  Region.associate = function(models){
    Region.hasMany(models.municipio, {
      foreignKey: 'regionId',
      sourceKey: 'id'
     // as: 'school'
    });

    
    
  }

  return Region;
};