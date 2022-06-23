const User = require('./User');
const Product = require('./Product');
const Order = require('./Order');
const Category = require('./Category');
const Cart = require('./Cart');

Product.belongsTo(Category, {
  foreignkey: 'category_id',
  onDelete: 'CASCADE',
});

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

User.hasMany(Order, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Cart, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Product, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Cart.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Product.hasMany(Cart, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

Product.hasMany(Order, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

Order.belongsTo(Product, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

Order.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = {
  User,
  Product,
  Category,
  Cart,
  Order,
};
