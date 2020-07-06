// Create array of 5 objects with 4 attributes each
const Films = [
    {title : 'Spotlight', Dir: 'Tom McCarthy', year: 2015,, Oscars: '2 awards'},
    {title: 'Moonlight', Dir: 'Barry Jenkins', year: 2016, Oscars: '3 awards'},
    {title: 'Shape of Water', Dir: 'Guillermo del Toro', year: 2017, Oscars: '4 awards'},
    {title: 'Green Book', Dir: 'Peter Farelly', year: 2018, Oscars: '3 awards'},
    {title: 'Parasite', Dir: 'Bong Joon-hoo', year: 2019, Oscars: '4 awards'}
];

// an exported getAll method that returns all array items
exports.getAll = () => {
    return Films;
}
