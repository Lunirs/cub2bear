const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Cart, Product } = require('../../models');
const sequelize = require('sequelize');

router.get('/', async (req, res) => {
  try {
    data = await Cart.findAll();
    res.status(200).json(data);
  } catch (err) {
    res.json(err);
  }});

router.post('/', withAuth, async (req, res) => {
  try {
    const item = await Cart.findOne({
      where: {
        product_id: req.body.product_id
      }
    })
    let cartData;
    
    if(item) {
      cartData = await Cart.increment(
        {
          quantity: + req.body.quantity
        },
        {
          where: {
            product_id: req.body.product_id
          }
        }
      );
    }
    else {
      cartData = await Cart.create({
        quantity: req.body.quantity,
        user_id: req.session.user_id,
        product_id: req.body.product_id,
      });
    }

    res.status(200).json(cartData);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const updateCartData = await Cart.update(
    {
      quantity: req.body.quantity
    },  {
      where: { user_id: req.session.user_id, id: req.params.id },
    });
    res.status(200).json(updateCartData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deleteCartData = await Cart.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(deleteCartData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
