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
