// Create variables for http and data/book
const http = require("http");
const data = require('./data.js');
// const Films = require("data.js");

const displayFilm = data.getAll();

// const displayTitle = data.getTitle();
// Create variable to get data from data.js

console.log("step 1")
http.createServer((req,res) => {
  const path = req.url.toLowerCase();
  switch(path) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Home Page: I\'ve watched ' + displayFilm.length +  ' nominated oscar films and they all won.');
      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('About page: I\'m more a UX designer but I do enjoy making things from scratch');
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found');
      break;
    }
}).listen(process.env.PORT || 3000);

