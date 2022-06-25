const sequelize = require('../config/connection');
const seedCategories = require('./category-seeds');
const seedUser = require('./user-seeds');
const seedProducts = require('./product-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedCategories();

  await seedProducts();

  process.exit(0);
};

seedAll();
