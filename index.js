'use strict'
const express = require("express");
const bodyParser = require("body-parser");
// const data = require('./data.js'); Removed for Assignment 4 using MongoDB instead of .data.js 
const films = require("./models/films"); //Added in assingment 4 to use MONGO DB

const app = express();
let exphbs = require("express-handlebars"); // should be at top of module 

//const { title } = require("process"); //Why is this here again? I don't remember?

app.engine('handlebars', exphbs({defaultLayout: false}));
app.set("view engine", "handlebars");

// const displayFilm = data.getAll();   Removed Assignment 4
// const displayTitle = data.getFilm(); Removed Assignment 4

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // set location for static files public doesn't really show up
app.use(bodyParser.urlencoded({extended: true})); // parse form submissions if gets form parse it out 

//Assignment 5 allow for cors
app.use('/api', require('cors')()); // set Access-Control-Allow-Origin header for api route

//Assignment 6 allow new route combines home/detail page. takes the Films list and turn it into an array
app.get('/', (req, res, next) => {
  return films.find({}).lean() 
  .then((films) => {
    res.render('home_react', {films: JSON.stringify(films)}); ////////Changed to the REACT home
  })
  .catch(err => {return res.status(500).send('Error occurred: database error.')});
});

app.get('/delete', (_req, res) => { //delete item for Assignment 4 --
  const filmTitle = rew.query.title;
  films.findOneAndDelete({title: filmTitle}, (err, film) => {
    if (err) {
      console.log(err);
    } else if (!film) {
      console.log(filmTitle + "not found"); 
      res.send(`${filmTitle} not found`);
    } else if (film) {
      console.log(filmTitle + "delete successful"); 
      res.send(`${filmTitle} delete successful`);
    }
    });
    });

//Assignment 5 REST API all films
app.get('/api/films', (req, res) => {
  return films.find({}).lean() 
    .then((films) => {
        // res.json sets appropriate status code and response header
        res.json(films);
    })
    .catch(err => {return res.status(500).send('Error occurred: database error.')});
});

//Rest API single Film 
app.get('/api/films/:title', (req, res) => {
  const filmTitle =req.params.title;
  films.findOne({title: filmTitle})
    .then((film) => {
      if (film === null) {
        return res.status(400).send(`Error: "$filmTitle}" not found`)
      } else { 
        // res.json sets appropriate status code and response header
        res.json(film)
      }
    })
    .catch(err => {
       res.status(500).send('Error occurred: database error.', err)
    });
});

//Delete Rest API 
app.delete('/api/films/:title', (req, res) => {
  const filmTitle =req.params.title;
  films.findOneAndDelete({title: filmTitle})
    .then((film) => {
      if (film === null) {
        return res.status(400).send(`Error: "$filmTitle}" not found`)
      } else { 
        // res.json sets appropriate status code and response header
        res.json(film)
      }
    })
    .catch(err => {
       res.status(500).send('Error occurred: database error.', err)
    });
});

//Adds or Updates Post 
app.post('/api/films/:title', (req, res) => {
  const filmTitle =req.params.title;
  films.findOneAndUpdate({title: filmTitle}, req.body, {upsert: true, new: true})
    .then((film) => {
      if (film === null) {
        res.json(film)
      }
    })
    .catch(err => {
       res.status(500).send('Error occurred: database error.', err)
    });
});

//Beginning of Week 4 Mongodb route ----------------------------------------------------------------------

app.get('/', (req, res, next) => { //this path is for home page Assignment 4----
  return films.find({}).lean()
    .then((films) => {
      res.render('home', { films });
    })
    .catch(err => next(err));
})

app.get ('/detail', (req, res) => { //this path is for the details page Assignment 4 ---
  const filmTitle = req.query.title;
  films.findOne({title: filmTitle}).lean()
  .then((films) => {
    res.render('detail', {title: film, data: films}); //right here something is messing up because of naming conventions
  });
});

app.get('/delete', (req, res) => { //delete item for Assignment 4 --
  const filmTitle = req.query.title;
  films.findOneAndDelete({title: filmTitle}, (err, film) => {
    if (err) {
      console.log(err);
    } else if (!film) {
      console.log(filmTitle + "not found"); 
      res.send(`${filmTitle} not found`);
    } else if (film) {
      console.log(filmTitle + "delete successful"); 
      res.send(`${filmTitle} delete successful`);
    }

    });
    });


// Create variables for http and data/book
// const Films = require("data.js");


// const displayTitle = data.getTitle();
// Create variable to get data from data.js

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

 app.listen(app.get('port'), () => { 
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

