var mongoose = require ('mongoose'),
User = require ('../models/User-model');

// use the public folder as a static dir
// app.use(express.static('public'));



// Database configuration for mongoose
// db: teste
mongoose.connect('mongodb://localhost/test');
// hook mongoose connection to db
var db = mongoose.connection;

// log any mongoose errors
db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

// log a success message when we connect to our mongoDB collection with no issues
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

// create a user a new user
var testUser = new User({
	username: "jmar777",
	password: "Password"
});

// save user to db
testUser.save(function(err){
	if (err) throw err;
// fetch user and test pw verification
User.findOne({ username: 'jmar777'}, function(err, user){
	if (err) throw err;
	});
// test a matching password
	user.comparePassword('Password123', function(err, isMatch){
	if (err) throw err;
	console.log('Password123', isMatch); //

	});
// test a failed pw
	user.comparePassword('123Password', function(err, isMatch){
	if (err) throw err;
	console.log('123Password', isMatch); //

	});

});