const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Order extends Model {}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    total_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true;,
    freezeTableName: true,
    underscored: true,
    modelName: 'order',
  }
);


module.exports = Order;