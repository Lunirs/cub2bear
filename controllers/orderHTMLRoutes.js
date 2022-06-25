const router = require('express').Router();
const { Order, Product } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const orderData = await Order.findAll({
      where: { user_id: req.session.user_id },
      order: [['id', 'ASC']],
    });

    const orders = orderData.map((order) => order.get({ plain: true }));

    res.render('orders', { orders, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', withAuth, async (req, res) => {
  try {
    const orderData = await Order.findByPk({
      where: { id: req.params.id, user_id: req.session.id },
      include: [Product],
    });
    const order = orderData.get({ plain: true });
    res.render('singleOrderDetail', { order });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
