'use strict'
const express = require("express");
const bodyParser = require("body-parser")
const http = require("http");
const data = require('./data.js');

const app = express();
let exphbs = require("express-handlebars"); // should be at top of module 
const { title } = require("process");


app.engine('handlebars', exphbs({defaultLayout: false}));
app.set("view engine", "handlebars");

const displayFilm = data.getAll();
const displayTitle = data.getFilm();

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // set location for static files public doesn't really show up
app.use(bodyParser.urlencoded({extended: true})); // parse form submissions if gets form parse it out 

//Starts week one stuff


// Create variables for http and data/book
// const Films = require("data.js");


// const displayTitle = data.getTitle();
// Create variable to get data from data.js

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // set location for static files
app.use(bodyParser.urlencoded({extended: true})); // parse form submissions

// send static file as response
app.get('/', (req, res) => {
  res.type('text/html');
  res.sendFile(__dirname + '/'); 
 });
 
 // send plain text response
 app.get('/about', (req, res) => {
  res.type('text/plain');
  res.send('About page Express Style');
 });

 //a Details handle 
 app.get('/detail', (req, res) => {
  const id = parseInt(req.query.id);
  const details = data.getDetail(id);
  res.render('detail', {id: id, details: details});
});

 // define 404 handler  ORDER IS IMPORTANT!!!!!!!!!!!!!!!!!!!!! 404 must be the last handler or else everything automatically is a 404 message
app.use( (req,res) => {
  res.type('text/plain'); 
  res.status(404);
  res.send('404 - Not found');
 });

 app.listen(app.get('port'), () => { //THis is how you start your app in terminal "node index.js"
  console.log('Express started'); 
 });


//home page needs to show name of a movie, then hot linked to http://localhost:3000/detail?item=[VALUE]










//----------------------Old week one 
// console.log("step 1")
// http.createServer((req,res) => {
//   const path = req.url.toLowerCase();
//   switch(path) {
//     case '/':
//       res.writeHead(200, {'Content-Type': 'text/plain'});
//       res.end('Home Page: I\'ve watched ' + displayFilm.length +  ' nominated oscar films and they all won.');
//       break;
//     case '/about':
//       res.writeHead(200, {'Content-Type': 'text/plain'});
//       res.end('About page: I\'m more a UX designer but I do enjoy making things from scratch');
//       break;
//     default:
//       res.writeHead(404, {'Content-Type': 'text/plain'});
//       res.end('Not found');
//       break;
//     }
// }).listen(process.env.PORT || 3000);

