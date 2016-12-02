var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require ('bcrypt');
var SALT_WORK_FACTOR = 10;

var userSchema = new Schema({
		
			username: {
				type:String, 
				required: "Username is Required", 
				index: {unique: true}, 
				trim: true
			},

			password: {
				type: String, 
				required: "Password is Required", 
				unique: true, 
				trim: true, 
				validate: [
      				function(input) {
        				return input.length >= 6;
      				},
      			'Password should be longer.'
    			]
			},

    		email: {
    			type: String,
    			unique:true,
    			match: [/.+\@.+\..+/, "Please enter a valid e-mail address"],
  			},
			//password hash!
			 userCreated: {
    			type: Date,
    			default: Date.now
  			},

			relationships: {
				"Beach": {
					question: Number,
					score: Number
				},
				"Mansion": {
					question: Number,
					score: Number
				},
				"Swamp": {
					question: Number,
					score: Number
				},
				"Mystery": {
					question: Number,
					score: Number
				}

			}
});
// hash pw before it is saved
UserSchema.pre(save, function(next){
	var user = this;
// only hash pw if it has been modified or new
	if(!user.isModified('password')) return next();
// generate a salt
bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
	if (err) return next(err);
	// hash new pw using new salt
	bcrypt.hash(user.password, salt, function (err, hash){
		if (err) return next(err);
		// override the clertext password with the hashed one
		user.password = hash;
		next();
	});
});

});

UserSchema.methods.comparePassword = function (playerPassword, cb){
	bcrypt.compare(playerPassword, this.password, function(err, isMatch){
		if (err) return cb(err);
		cb(null, isMatch);
	});
};

module.exports = mongoose.model(User, UserSchema)
