// Create array of 5 objects with 4 attributes each
let films = [
    {title: 'Spotlight', Dir: 'Tom McCarthy', year: 2015, Oscars: '2 awards'},
    {title: 'Moonlight', Dir: 'Barry Jenkins', year: 2016, Oscars: '3 awards'},
    {title: 'Shape of Water', Dir: 'Guillermo del Toro', year: 2017, Oscars: '4 awards'},
    {title: 'Green Book', Dir: 'Peter Farelly', year: 2018, Oscars: '3 awards'},
    {title: 'Parasite', Dir: 'Bong Joon-hoo', year: 2019, Oscars: '4 awards',} 
];

// an exported getAll method that returns all array items
exports.getAll = () => {
    return films;
};

exports.getDetail = title => {
    const film = films.find(film => film.title === title);
    if (film === undefined) {
        return {"details": false, "msg": `Film "${title}" not found`}
    } else {
    return film;
    }
};

exports.addFilm =(title, Dir, year, Oscars) =>{
    if ([title, Dir, year, Oscars].includes(undefined)) {
        return {"added": false, "msg": "more info needed"};
    } else {
        const newFilm = {
            title: title,
            Dir: Dir,
            year: year,
            Oscars: Oscars
        };
        films.push(newFilm);
        return newFilm;
    }
};

exports.delFilm = title => {
    const delFilm = films.findIndex(films => films.title === title);
    if (delFilm === -1) {
        return {"deleted": false, "msg": `"${film}" doesn't exist`}
    } else {
        films.splice(deleteFilm,1);
        return{"deleted": true, "msg": `"${title}" removed`}
    }
};


exports.getFilm = title => { //getFilm grabs the object. Whole thing title, dir, year
    return films.find((film) => { //returns object films. 
        return film.title === title;  // returns title
    });
}

// const addFilm= (title, Dir, year, Oscars, id) => {
//     if([title, Dir, year, Oscars,].includes(undefined)){
//         return {"added": false, "msg":"please complete all information"};
//         } else {
//             const newFilm={title: title, Dir: Dir, year: year, Oscars: Oscars.};
//             films.push(newFilm);
//             return newFilm;
//     }
// }


// console.log(this.getFilm('Spotlight'));



module.exports={getAll, getDetail, delFilm, getFilm}

