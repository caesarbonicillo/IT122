// Create array of 5 objects with 4 attributes each
let films = [
    {title: 'Spotlight', Dir: 'Tom McCarthy', year: 2015, Oscars: '2 awards', id: 0},
    {title: 'Moonlight', Dir: 'Barry Jenkins', year: 2016, Oscars: '3 awards', id: 1},
    {title: 'Shape of Water', Dir: 'Guillermo del Toro', year: 2017, Oscars: '4 awards', id: 2},
    {title: 'Green Book', Dir: 'Peter Farelly', year: 2018, Oscars: '3 awards', id: 3},
    {title: 'Parasite', Dir: 'Bong Joon-hoo', year: 2019, Oscars: '4 awards', id: 4} 
];

// an exported getAll method that returns all array items
const getAll = () => {
    return films;
};

const getDetail = id => {
    const filmTitle = films.find(film => film.id === id);
    if (filmTitle === undefined) {
        return {"details": false, "msg": `Film "${id}" not found`}
    } else {
    return filmTitle;
    }
};

const getFilm = title => { //getFilm grabs the object. Whole thing title, dir, year
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



module.exports={getAll, getDetail, getFilm}

