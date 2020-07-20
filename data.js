// Create array of 5 objects with 4 attributes each
const Films = [
    {title : 'Spotlight', dir: 'Tom McCarthy', year: 2015,, oscars: '2 awards'},
    {title: 'Moonlight', dir: 'Barry Jenkins', year: 2016, oscars: '3 awards'},
    {title: 'Shape of Water', dir: 'Guillermo del Toro', year: 2017, oscars: '4 awards'},
    {title: 'Green Book', dir: 'Peter Farelly', year: 2018, oscars: '3 awards'},
    {title: 'Parasite', dir: 'Bong Joon-hoo', year: 2019, oscars: '4 awards'}
];

// an exported getAll method that returns all array items
exports.getAll = () => {
    return Films;
}

exports.getTitle = (titleSearch) => {
        if (!titleSearch || titleSearch === "") {
            return {'value': false, 'message': 'Error - no value entered'}
    } else {
        const searchedFilm = Films.find(Films => Films.title === searchedFilm);
        return searchedFilm;
    }
};
exports.checkExists = (title) => {
    const film = this.getFilm(title);
    if (!film) {
        return true;
    } else {
        return false;
    }
}

exports.addFilm = (newFilm) => {
    if (!newFilm.title) {
        return {'value':false, 'message': 'Error - the film must have a title'}; 
    } else { 
        const film = this.getFilm(newFilm.title);
        
        if (!film){
            Films.push(newFilm);
            return {'added': true, 'message': `Added Film: "${newFilm.title}"`}; 
        
    } else {
        return {'added': false, 'message': `"${newFilm.title}" already exits`};
    }
    }

}

// return a film search for the title 

exports.deleteFilm = (title) => {
    if (!title || title === "") {
        return {'value': false, 'message': 'Error - no value entered'}; // Verifies if a value is entered (also excludes empty strings)
    } else {
        const searchedFilm = this.getFilm(title); // Retrieve and reference searched item
        if (!searchedFilm) {
            return {'removed': false, 'messge': 'Error - Film does not exist'}; // Reports lookup failure with a boolean object
        } else {
            Films.splice(Films.indexOf(searchedFilm), 1); 
            return {'removed': true, 'messge': `Removed "${searchedFilm.title}"`}; // Reports lookup failure with a boolean object
        }
    }
}