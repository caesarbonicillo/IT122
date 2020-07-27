'use strict'

const Film =require("../models/book")

Book.find({}, (err,result) => {
    //output error if one occurs 
    if (err) {
        console.log(err);
    }else {
        //otherwise output the array of documents 
        console,log(result);
    }
    return
});

