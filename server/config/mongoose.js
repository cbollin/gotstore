var mongoose = require('mongoose');
var fs = require('fs');
mongoose.connect('mongodb://localhost/MEAN_project');
require('../models/Users.js');
require('../models/Products.js');
// require('../models/Reviews.js');
require('../config/passport.js');
