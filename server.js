var express = require('express');
// var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var logger = require('morgan');

// var helpers = require('./config/helpers'); need for bcrypt&Passport

var app = express();
var PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(passport.initialize());


app.use(express.static('./public'));
app.use(express.static('./LoveInTheApocalypse/dist/'));


mongoose.connect('mongodb://localhost/loveintheapocalypse');
var db = mongoose.connection;

db.on('error', function(err){
	console.log('Mongoose Error: ', err);
});

db.once('open', function(){
	console.log("Mongoose connection successful.");
});

//require all controllers. Pass 'app' to all controllers and return app.use("/", router)
//require('./controllers/users_controller.js')(app);
// require('./controllers/articles_controller.js')(app);

// require models
var Zombie = require('./models/Zombie.js');
var User = require('./models/User-model.js');
// load models
require('./LoveInTheApocalypse/models')(config);
// load passport strategies
require('./server_side/passport')(config);

// pass the authorization checker middleware
const authCheckMiddleware = require('./server_side/middlewares/auth-check')(config);
app.use('/api', authCheckMiddleware);

// routes
const authRoutes = require('./server_side/routes/auth');
const apiRoutes = require('./server_side/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// app.get('/', function(req, res) {  
//   res.send('Relax. We will put the home page here later.');
// });

var port = 3000;
app.listen(3000, function(){
	console.log("App running on port (3000):" + port);
});

