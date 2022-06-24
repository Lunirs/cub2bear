// import our database connection from config.js 
const sequelize = require('../config/connection');

// import our important data of sequelize library 
const { Model, DataTypes } = require('sequelize');

// initialize product model table by extending off sequelizes model class 
class Product extends Model {}

// set up fields and rules for product model 
Product.init(
  // define columns
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
     },
  
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    stock: {
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
        validate: {
        isNumeric: tru }
    },

    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'category',
        key: 'id',
      }
    }
  }, 

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;