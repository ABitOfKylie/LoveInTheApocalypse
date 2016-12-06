const express = require('express');
// var path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('morgan');
const passport = require('passport');
const config = require('./config');

const app = express();


app.use(express.static('./public'));
app.use(express.static('./LoveInTheApocalypse/dist/'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
// const PORT = process.env.PORT || 3000;


// connect to db & load models -
mongoose.connect('mongodb://localhost/loveintheapocalypse');
var db = mongoose.connection;

// plug in the promise library somewhere....  -
mongoose.Promise = global.Promise;

db.on('error', function(err){
	console.log('Mongoose Error: ', err);
	process.exit(1);
});

db.once('open', function(){
	console.log("Mongoose connection successful.");
});


 
app.use(passport.initialize());
// load passport strategies
const localSignupStrategy = require('./server_side/passport/local-signup');
const localLoginStrategy = require('./server_side/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authorization checker middleware
const authCheckMiddleware = require('./server_side/middleware/auth-check');
app.use('/api', authCheckMiddleware);

//require all controllers. Pass 'app' to all controllers and return app.use("/", router)
//require('./controllers/users_controller.js')(app);
// require('./controllers/articles_controller.js')(app);

// require models
// var Zombie = require('./models/Zombie.js');
const User = require('./models/user.js');
const Zombie = require('./models/Zombie.js');
// const zombieTalk = require('./src/models/zombieScript.js');

// load models
// require('./src/models/')(config);
app.use ('/User', userSchema);
app.use ('/Zombie', ZombieSchema);
// app.use ('zombieTalk';zombieScript);
// routes
const authRoutes = require('./server_side/routes/auth');
const apiRoutes = require('./server_side/routes/api');

app.use('/auth', authRoutes);
app.use('/api', apiRoutes);


// app.get('/', function(req, res) {  
//   res.send('Relax. We will put the home page here later.');
// });

const port = 3000;
app.listen(3000, () =>{
	console.log("App running on port (3000):" + port);
});

