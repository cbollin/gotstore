var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
  author: String,
  description: String,
  rating: Number,
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }
});

mongoose.model('Review', ReviewSchema);
