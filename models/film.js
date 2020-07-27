const credentials = require("../lib/credentials");
const mongoose = require("mongoose");



// remote db connection settings. For security, connectionString should be in a separate file not committed to git
const connectionString = "mongodb+srv://<dbuser>:<Password1>@<cluster>.mongodb.net/test?retryWrites=true";

// local db connection settings 
// const ip = process.env.ip || '127.0.0.1';
// const connectionString = 'mongodb://' +ip+ '/<DB_NAME>';

mongoose.connect(connectionString, { dbName: <'dbname'>, useNewUrlParser: true }); //credentials not checked into gitHub

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

const mySchema = new mongoose.Schema({
 title: { type: String, required: true },
 dir: String,
 year: Number,
 oscars: Date,
}); 

module.exports = mongoose.model('film', mySchema);