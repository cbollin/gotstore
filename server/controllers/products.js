var mongoose = require('mongoose');
var Product = mongoose.model('Product');


module.exports = {

  showProducts: function(req, res, next) {

    Product.find(function(err, products){
    if(err) {
      return next(err);
    }

    res.json(products);
    console.log('the products have been retrieved from the db');
   });
  },

  addProducts: function(req, res, next) {

    var product = new Product(req.body);
    product.seller = req.payload.username;
    product.save(function(err, product){
      if(err) {
        return next(err);
      }
      res.json(product);
      console.log('the product has been saved in the db');
    });
  },

  showOneProduct: function(req, res, next) {
    Product.findOne({_id: req.params.id}, function(err, product) {
      if(err) {
        console.log(err)
        res.json(err);
      } else {
        console.log(product, "PRODUCT RETRIEVED!!!!!");
        res.json(product);
      }
    });
  },

  upvoteProduct: function(req, res, next) {

    Product.upvote(function(err, product){
      if (err) {
        return next(err);
      }
      res.json(product);
      console.log('the product has been upvoted');
    });

  }
}
