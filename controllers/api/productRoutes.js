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



module.exports = router;
