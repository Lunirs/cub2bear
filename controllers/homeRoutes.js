const router = require('express').Router();
const { Product, Category, User } = require('../models');

router.get('/', async (req, res) => {
  try {
    console.log("logged in: " + req.session.loggedIn);
    const productData = await Product.findAll({
      include: [
        {
          model: User,
          attributes: { exclude: ['password'] },
        },
        { model: Category },
      ],
    });

    const categoryData = await Category.findAll();

    const products = productData.map((product) => product.get({ plain: true }));
    const categories = categoryData.map((category) =>
      category.get({ plain: true })
    );
    res.render('homepage', {
      products,
      categories,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/products/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: { exclude: ['password'] },
        },
        { model: Category },
      ],
    });

    const singleProduct = productData.get({ plain: true });

    res.render('singleProduct', {
      singleProduct,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

module.exports = router;
