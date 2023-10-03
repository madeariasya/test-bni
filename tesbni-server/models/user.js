'use strict';
const {
  Model, INTEGER, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    name: {
      type:STRING,
      allowNull:{message:'Test'},
      validate:{
        notEmpty:{message:'test'},
      }
    },
    numberPhone: {
      type:STRING,
      unique:true,
      allowNull:false,
      validate:{
        notEmpty:true,
      }
    },
    bornDate: {
      type:STRING,
      allowNull:false,
      validate:{
        notEmpty:true,
      }
    },
    province: {
      type:STRING,
      allowNull:false,
      validate:{
        notEmpty:true,
      }
    },
    district: {
      type:STRING,
      allowNull:false,
      validate:{
        notEmpty:true,
      }
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};