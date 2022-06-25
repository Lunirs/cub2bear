const { Product } = require('../models');

const productData = [
  {
    product_name: 'Pink Onesie',
    description: "Completely new. Never worn because my baby didn't fit.",
    price: 40.0,
    stock: 1,
    category_id: 1,
    user_id: 1,
  },

  {
    product_name: 'Yellow Onsie',
    description: 'Worn only once. Still in great condition.',
    price: 37.0,
    stock: 1,
    category_id: 2,
    user_id: 2,
  },

  {
    product_name: 'Blue Onesie',
    description: 'Worn several times. Still in good condition.',
    price: 35.0,
    stock: 1,
    category_id: 3,
    user_id: 3,
  },
  {
    product_name: 'Red Onesie',
    description: 'Color is slightly faded. But overall good condition.',
    price: 30.0,
    stock: 1,
    category_id: 4,
    user_id: 4,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
