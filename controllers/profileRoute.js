const router = require('express').Router();
const { Product, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const productData = await Product.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [{ model: User, attributes: { exclude: ['password'] } }],
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
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/new', withAuth, async (req, res) => {
  try {
    res.render('newProductListing', {
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
