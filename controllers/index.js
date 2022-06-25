const router = require('express').Router();
const apiRoutes = require('./api');
const homepageRoutes = require('./homeRoutes');
const categoryRoutes = require('./categoryHTMLRoute');
const cartRoutes = require('./cartRoutesHTML');
const orderRoutes = require('./orderHTMLRoutes');
const profileRoutes = require('./profileRoute');

router.use('/', homepageRoutes);
router.use('/api', apiRoutes);
router.use('/categories', categoryRoutes);
router.use('/cart', cartRoutes);
router.use('/orders', orderRoutes);
router.use('profile', profileRoutes);

module.exports = router;
