const router = require('express').Router();
const { Category, Product } = require('../models');

// router.get('/', async (req, res) => {
//   try {
//     const categoryData = await Category.findAll();

//     const categories = categoryData.map((category) =>
//       category.get({ plain: true })
//     );

//     res.render('homepage', { categories });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//show products by catagory

router.get('/:id', async (req, res) => {
  try {
    const productByCatData = await Product.findAll({
      where: { category_id: req.params.id },
    });

    const products = productByCatData.map((product) =>
      product.get({ plain: true })
    );

    res.render('individualCategory', { products });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
