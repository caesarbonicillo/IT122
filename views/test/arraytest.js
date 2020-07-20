const Films = require('..data.js');
const expect = require('chai').expect;
const assert = require('chai').assert;

describe("Films module - getFilm()", () => {
    it("Returns requested film", () => {
        const result = Films.getTitle("Spotlight");
        expect(result).to.deep.equal({title : 'Spotlight', dir: 'Tom McCarthy', year: 2015,, oscars: '2 awards'});
    });
    it("Fails to retrieve an invalid film", () => {
        const result = games.getTitle("Juno");
        expect(result).to.be.undefined;
    });
});

describe("Films module - addFilm()", () => {
    it("Adds requested film if it doesn't already exist", () => {
        const result = Films.addFilm({title: "Scent of a Woman", dir: "Chris O'Donnel", year: "1993", oscars: '1 award'});
        assert.isTrue(result.added, "Successfully added film"); /
    });
    
    it("Fails to add an existing game", () => {
        const result = Films.addFilm({title: "Malcom X", dir: "Denzel Washington", year: "1993", oscars: '0 award'});
        assert.isFalse(result.added, "Failed to add - Film does notexist"); // expect(result.add).to.equal.false;
    });
});

describe("Films module - deleteFilm()", () => {
    it("Removes requested film if it exists", () => {
        const result = Films.deleteFilm("Moonlight");
        assert.isTrue(result.removed, "Successfully removed film");
    });
    it("Fails to remove a film", () => {
        const result = games.deleteFilm("Up");
        assert.isFalse(result.removed, "Failed to remove - game does not exist");
    });
});

