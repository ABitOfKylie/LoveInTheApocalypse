// require mongoose
var mongoose = require('mongoose');
// create a schema class
var Schema = mongoose.Schema;

// create the Note schema
var ZombieSchema = new Schema({
  // just a string
  name: {
    type:String
  },
  // just a string
  location: {
    type:String
  },
    questions: {
    type:String
  }
});

// Remember, Mongoose will automatically save the ObjectIds of the notes.
// These ids are referred to in the Article model.

// create the Note model with the NoteSchema
var Zombie = mongoose.model('Zombie', ZombieSchema);

// export the Note model
module.exports = Zombie;