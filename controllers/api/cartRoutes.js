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
    let status;

    const item = await Cart.findOne({
      where: {
        product_id: req.body.product_id
      }
    })

    // stock data to check if total quantity is over current stock.
    const product = await Product.findOne({
      where: {
        id: req.body.product_id
      }
    });

    let cartData;
    if(item) {
      const total = item.quantity + req.body.quantity;
      console.log(total);

      if(total <= product.stock) {
        cartData = await Cart.increment({
            quantity: + req.body.quantity
          }, {
            where: {
              product_id: req.body.product_id
            }
          }
        );

        status = 200;
      }
      else {
        status = 401;
      }
    }
    else {
      cartData = await Cart.create({
        quantity: req.body.quantity,
        user_id: req.session.user_id,
        product_id: req.body.product_id,
      });

      status = 200;
    }

    res.status(status).json(cartData);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    // stock data to check if total quantity is over current stock.
    const item = await Cart.findOne({
      where: {
        id: req.body.id
      }
    })
    const product = await Product.findOne({
      where: {
        id: item.product_id
      }
    });

    if(req.body.quantity <= product.stock) {
      const updateCartData = await Cart.update(
        {
          quantity: req.body.quantity
        },  {
          where: { user_id: req.session.user_id, id: req.params.id },
        });
        res.status(200).json(updateCartData);
    } else {
      // error code for over stock
      res.status(401).json(null);
    }
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
