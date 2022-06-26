const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Cart, Product } = require('../models');

router.get('/', withAuth, async (req, res) => {
  try {
    const cartData = await Cart.findAll({
      where: { user_id: req.session.user_id },
      include: [Product],
    });
    res.render('cart', {
      cartData,
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
