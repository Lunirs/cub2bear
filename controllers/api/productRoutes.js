const router = require('express').Router();
const { Product } = require('../../models');
const withAuth = require('../../utils');

// The `/api/products` endpoint

// create new product

router.post('/', withAuth, async (req, res) => {
  try {
    const category = await Product.findOne({
      where: {name: req.body.category}
    });

    const newProductData = await Product.create({
      product_name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      stock: req.body.stock,
      category_id: category.category_id,
      user_id: req.session.user_id,
    });
    res.status(200).json(newProductData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update product
router.put('/:id', withAuth, async (req, res) => {
  try {
    const updateProductData = await Product.update(req.body, {
      where: { id: req.params.id },
    });

    if (!updateProductData) {
      res
        .status(404)
        .json({ message: 'Could not find a product with this id' });
      return;
    } else {
      res.status(200).json(updateProductData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// deleting products
router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  try {
    const deleteProductData = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteProductData) {
      res
        .status(404)
        .json({ message: 'Could not find a product with this id' });
      return;
    } else {
      res.status(200).json(deleteProductData);
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
