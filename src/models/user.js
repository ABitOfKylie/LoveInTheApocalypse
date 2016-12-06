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

userSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};
// hash pw before it is saved
userSchema.pre("save", function saveHook(next){
	const user = this;
// only hash pw if it has been modified or new
	if(!user.isModified('password')) return next();
// generate a salt
	return bcrypt.genSalt((saltError, salt) => {
	if (saltError) { 
		return next(saltError); 
	}
	// hash new pw using new salt
		return bcrypt.hash(user.password, salt, (hashError, hash) => {
			if (hashError) {
				return next (hashError);
			}
			// override the clertext password with the hashed one
			user.password = hash;
			
			return next();
		});
	});
});

module.exports = mongoose.model("User", userSchema)


// userSchema.methods.comparePassword = function (password, cb){
// 	bcrypt.compare(password, this.password, function(err, isMatch){
// 		if (err) return cb(err);
// 		cb(null, isMatch);
// 	});
// };

