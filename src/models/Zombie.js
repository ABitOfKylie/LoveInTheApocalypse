// require mongoose
var mongoose = require('mongoose');
// create a schema class
var Schema = mongoose.Schema;

var ZombieSchema = new Schema({
  // just a string
  name: {
    type:String
  },
  // just a string
  location: {
    type:String
  },
    image: {
    type:String
  }
});

// Remember, Mongoose will automatically save the ObjectIds of the notes.
// These ids are referred to in the Article model.

// create the Z model with the ZSchema
var Zombie = mongoose.model('Zombie', ZombieSchema);

// export the Z model
module.exports = Zombie;