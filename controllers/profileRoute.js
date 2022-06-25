const router = require('express').Router();
const { Product } = require('../models');
const withAuth = require('../utils');

router.get('/', withAuth, async (req, res) => {
  try {
    const productData = await Product.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const products = productData.map((product) => product.get({ plain: true }));
    res.render('profile', {
      products,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id);

    const product = productData.get({ plain: true });

    res.render('editProductListing', {
      product,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/new', withAuth, async (req, res) => {
  try {
    res.render('newProductListing', {});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
