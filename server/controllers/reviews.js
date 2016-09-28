var mongoose = require('mongoose');
var User = mongoose.model('User');
var Product = mongoose.model('Product');
var Review = mongoose.model('Review');

module.exports = {

  addReviews: function(req, res, next) {

    var review = new Review(req.body);
    review.product = req.product;
    review.author = req.payload.username;

    review.save(function(err, review) {
      if(err) {
        return next(err);
      }
      req.product.reviews.push(review);
      req.product.save(function(err, product) {
        if(err) {
          return next(err);
        }
        res.json(review);
      });
    });
  }
}
