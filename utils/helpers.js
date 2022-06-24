

module.exports 

  app.get('/cart', (req, res) => {
    let success; const warning = app.helpers.msg(req);
    const connection = app.dao.connectionFactory();
    const productsDao = new app.dao.productsDAO(connection);

    // Get list of ID of product in cart
    const productsInCartIds = req.cookies['productsInCart'];

    if (productsInCartIds.length == 0) {
      res.render('checkout/cart', {
        title: 'Cart',
        warning: 'You do not have items in your cart!',
      });
      
    };})