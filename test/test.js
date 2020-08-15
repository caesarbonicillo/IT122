const expect = require("chai").expect;
const data = require("../data");

const displayFilms = data.getAll();

describe("Film module", () => {
    it("Returns requested Film", () => {
        const result = data.getDetail("Spotlight");
        expect(result).to.deep.equal({title: 'Spotlight', Dir: 'Tom McCarthy', year: 2015, Oscars: '2 awards', id: 0});
    })

    it("Fails w/invalid film"), () => {
        const result = data.getDetail("Lion King");
        expect(result.msg).to.deep.equal("Lion King not a Winner");
    };

    it("Adds a new Film", () => {
        data.addFilm("Frozen", "Jennifer Lee", 2013, "0 awards", 6);
        expect(displayFilms).to.deep.include({title: 'Frozen', Dir: 'Jennifer Lee', year: 2013, Oscars: '0 awards', id: 6});
    })

    it("Fails to add due to missing params", () => {
        data.addFilm("fake film", "Someone");
        expect(displayFilms).to.not.include({title: "fake film", Dir: "Someone", year: undefined, Oscars: undefined, id: undefined});
        expect(data.addFilm("fake film", "Someone").msg).to.deep.equal('incomplete info');
    });

    it("Deletes requested Movie", () => {
        data.delFilm("Spotlight");
        expect(displayFilms).to.not.include({title: 'Spotlight', Dir: 'Tom McCarthy', year: 2015, Oscars: '2 awards', id: 0});
    });

    it("Delete failed to delete. No matches", () => {
        data.delFilm("Aladdin");
        expect(data.getDetail("Aladdin").msg).to.deep('"Aladdin" not found');
    })

    

});
