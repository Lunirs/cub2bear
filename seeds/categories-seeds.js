const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Age',
  },
  {
    category_name: 'Gender',
  },
  {
    category_name: 'Tops',
  },
  {
    category_name: 'Bottom',
  },
  {
    category_name: 'Accessories',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
