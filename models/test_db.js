const Film = require("./films.js");

// return all records

Film.find({}, (err, result) => {
  //output error if one has occured
  if (err){
      console.log(err);
  }else{
      //otherwise output
      console.log(result);
  }
});
