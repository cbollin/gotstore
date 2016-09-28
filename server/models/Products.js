var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  seller: String,
  name: {type: String, required: true},
  condition: String,
  quantity: {type: Number, default: 1},
  price: {type: Number, required: true},
  upvotes: {type: Number, default: 0},
  reviews: { type: mongoose.Schema.Types.ObjectId, ref: 'Review' }

});

ProductSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
  console.log('the products upvote has been saved');
};

mongoose.model('Product', ProductSchema);
