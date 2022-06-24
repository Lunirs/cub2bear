const router = require('express').Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const categoriesRoutes = require('./categoriesRoutes');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/categories', categoriesRoutes);

module.exports = router;
