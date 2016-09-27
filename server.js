var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var passport = require("passport");
var app = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.json());
app.use(passport.initialize());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

//Server-Side Controllers//
users = require('./server/controllers/users.js');

app.listen(8000, function(){
	console.log('listening on port 8000.....');
});
