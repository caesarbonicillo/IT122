const films = require("./films.js");

// return all records

films.find({}).lean()
  .then((films) => {
    console.log(films);
  })
  .catch(err => next(err));