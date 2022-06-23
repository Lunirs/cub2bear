const { Product } = require('../models');

const productData = [
  {
    product_name:
    price:
    category_id:
  },
  {
    product_name:
    price:
    category_id
  },
  {
    product_name: 
    price:
    stock:
    category_id:
  },
  {
    product_name:
    price:
    category_id:
  },
  {
    product_name: '',
    price:
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;