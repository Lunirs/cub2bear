const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Cart, Product } = require('../models');

router.get('/', withAuth, async (req, res) => {
  try {
    const cartData = await Cart.findAll({
      where: { user_id: req.session.user_id },
      include: [Product],
    });
    let totalPrice = 0;
    let cartItems = cartData.map((cartItem) => cartItem.get({ plain: true }));
    cartItems.forEach(item => {
      var products = item.product.price * item.quantity;
      item.total = parseFloat(products).toFixed(2);
      totalPrice += products;
    });

    const totalFloat = parseFloat(totalPrice).toFixed(2)
    
    console.log(cartItems);
    res.render('cart', {
      cartItems,
      totalFloat,
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
