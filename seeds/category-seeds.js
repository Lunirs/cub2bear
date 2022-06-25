const { Category } = require('../models');

const categoryData = [
  {
    name: '0-3 Months',
  },
  {
    name: '3-6 Months',
  },
  {
    name: '6-12 Months',
  },
  {
    name: '12-18 Months',
  },
  {
    name: '18-24 Months',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
