const router = require('express').Router();
const { Product, Category } = require('../models');
const withAuth = require("../../utils")

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
router.post("/", withAuth, async(req,res) =>{
  try{
    const newProductData = await Product.create({
      product_name: req.body.product_name,
      price: req.body.price,
      description: req.body.description,
      category_id: req.body.category_id,
      user_id: req.session.user_id,
    });
    res.status(200).json(productData)

  }
})

// update product
router.put('/:id', (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      return Product.findAll({ where: { product_id: req.params.id } });
    })
      

      // deleting products 
        router.delete('/:id', async (req, res) => {
          // delete one product by its `id` value
        try {
          const productData = await Product.destroy({
            where: {
              id: req.params.id
            }
          });
          if (!productData){
            res.status(404).json({ message: "This product does not exist"});
            return;
          }
          res.status(200).json(productData);
        } catch (err) {
          res.status(400).json(err);
        }


module.exports = router;
