var mongoose = require('mongoose');
var fs = require('fs');
mongoose.connect('mongodb://localhost/MEAN_project');
require('../models/Users.js');
require('../config/passport.js');
