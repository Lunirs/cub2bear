const router = require('express').Router();
const { Category, Product } = require('../models');

router.get('/categories', async (req, res) => {
  try {
    const categoryData = await Category.findAll();

    const categories = categoryData.map((category) =>
      category.get({ plain: true })
    );

    res.json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

//show products by catagory

router.post('/category/:id', async (req, res) => {
  try {
    const productByCatData = await Product.findAll({
      where: { category_id: req.params.id },
    });

    const productsByCat = productByCatData.map((product) => {
      product.get({ plain: true });
    });

    res.render('homepage', { productsByCat });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
