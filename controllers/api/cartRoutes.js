const router = require('express').Router();
const withAuth = require('../../utils');
const { Cart, Product } = require('../../models');

router.post('/', withAuth, async (req, res) => {
  try {
    const cartData = await Cart.create({
      quantity: req.body.quantity,
      user_id: req.session.user_id,
      product_id: req.body.product_id,
    });
    res.status(200).json(cartData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const updateCartData = await Cart.update(req.body, {
      where: { user_id: req.session.user_id, product_id: req.params.id },
      include: [Product],
    });
    res.status(200).json(updateCartData);
    res.redirect('/cart');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deleteCartData = await Cart.destroy({
      where: { user_id: req.session.user_id, id: req.params.id },
    });
    res.status(200).json(deleteCartData);
    res.redirect('/cart');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
