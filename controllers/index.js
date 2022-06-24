const router = require('express').Router();
const apiRoutes = require('./api');
const homepageRoutes = require('./homeRoutes');
// router.use('/api', apiRoutes);

// router.use((req, res) => {
//   res.send('<h1>Wrong Route!</h1>');
// });

router.use('/', homepageRoutes);
module.exports = router;
