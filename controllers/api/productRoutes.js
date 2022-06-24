const router = require('express').Router();
const { Product, Categories } = require('../models');

// The `/api/products` endpoint

// get all products
// router.get('/', async (req, res) => {
  // find all products
  // try {
    // const productData = await Product.findAll({
      // include the category
      // include: [
        // {
          // model: Category,
          //attributes: ["id", "category_name"], }, // ADD MORE ATTRIBUTES???? 
        //},

    //}) 
    // res.status(200).json(productData);
  // } catch (err) {
    // res.status(500).json(err);
 //  }
// });

// create new product 
router.post('/', (req, res) => {
  Product.create(req.body)
    .then((product) => {
      if (req.body.catergory.length) {
        const age = req.body.catergoryIds.map((catergory_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });



module.exports = router;
