var Users = require('../controllers/users.js');
var Products = require('../controllers/products.js');
// var Reviews = require('../controllers/reviews.js');
var jwt = require('express-jwt');
var auth = jwt({secret: 'secret', userProperty: 'payload'});

module.exports = function(app) {

  //Products//
  app.get('/products', Products.showProducts);
  app.post('/products', auth, Products.addProducts);
  app.get('/products/:id', Products.showOneProduct);
  app.put('/products/:id/upvote', auth, Products.upvoteProduct);

  // // //Reviews
  // app.post('/products/:id/reviews', auth, Reviews.addReviews);


  //Users
  app.post('/register', Users.registerUser);
  app.post('/login', Users.loginUser);
}
