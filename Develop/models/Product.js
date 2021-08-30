// import important parts of sequelize library
const { Model, DataTypes, Sequelize } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    product_name:{
      type: Sequelize.STRING
    },

    price:{
      type: Sequelize.DOUBLE
    },
    stock:{
      type: Sequelize.INT
    },

    category_id:{
      type: Sequelize.INT
    },
  },


  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
