const mongoose = require("mongoose");

// remote db connection settings. For security, connectionString should be in a separate file not committed to git
const connectionString = "mongodb+srv://User1:password1234@cluster0-adyau.gcp.mongodb.net/films?retryWrites=true&w=majority";

// local db connection settings 
// const ip = process.env.ip || '127.0.0.1';
// const connectionString = 'mongodb://' +ip+ '/<DB_NAME>';

mongoose.connect(connectionString, { dbName: "cluster0", useNewUrlParser: true }); 

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

// define Book model in JSON key/value pairs
// values indicate the data type of each key
const mySchema = mongoose.Schema({
 title: { type: String, required: true },
 Dir: String,
 year: Number,
 Oscars: String,
 id: Number
}); 

module.exports = mongoose.model('Film', mySchema);