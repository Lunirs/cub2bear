const { Category } = require('../models');

const categoryData = [
  {
    category_name: '0-3 Months',
  },
  {
    category_name: '3-6 Months',
  },
  {
    category_name: '6-12 Months',
  },
  {
    category_name: '12-18 Months',
  },
  {
    category_name: '18-24 Months',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;
