import * as api from './apiCalls';

describe ('API_CALLS', () => {
  let mockUrl;
  describe ('fetchParse', () => {
    beforeAll( () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve({
              hello: 'youFool'
            })
        })
      );
      mockUrl = 'http://mock.com';

    });

    it('should call fetch with the expected params', () => {
      api.fetchParse(mockUrl);
      expect(window.fetch).toHaveBeenCalledWith(mockUrl);
    });

    it('should resolve a promise', () => {
      expect(api.fetchParse(mockUrl)).resolves.toEqual({ hello: 'youFool' });
    });
  })

  describe ('movieCleaner', () => {
    let mockData;
    let expected;

    describe ('when given data from the Movie Database API', () => {
      beforeEach( () => {
        mockData = {
          results: [{
            adult: false,
            title: "The Interview",
            poster_path: "/8PADfwpMWK0ASDe4Z5lALCf0zGu.jpg"
          },{
            adult: false,
            title: "Gone with the Wind",
            poster_path: "/4o1yeosjSFMaI9pe1rOkYcZ6hHO.jpg"
          }],
          total_pages: 20,
          total_results: 400
        }

        expected = [{
          title: "The Interview",
          poster: "/8PADfwpMWK0ASDe4Z5lALCf0zGu.jpg"
        },{
          title: "Gone with the Wind",
          poster: "/4o1yeosjSFMaI9pe1rOkYcZ6hHO.jpg"
        }]
      })

      it('returns an array of movie objects', () => {
        expect(api.movieCleaner(mockData)).toEqual(expected);
      });
    })

    describe ('when given null', () => {
      beforeEach( () => {
        mockData = null;
      })

      it('returns undefined', () => {
        expect(api.movieCleaner(mockData)).toBeUndefined();
      })
    })

    describe ('when given an object with no results ', () => {
      beforeEach( () => {
        mockData = { 
          results: [],
          total_pages: 20,
          total_results: 400
        } 
      })

      it('returns an empty array', () => {
        expect(api.movieCleaner(mockData)).toHaveLength(0)
      })
    })
  })

  describe ('logIn', () => {
    describe ('when given a user name and password', () => {
      //it makes the correct fetch request with the un and pw
         //this is testing 29-32
    })

    // describe when the fetch request is successful
        // we don't care what the un and pw are here, we just care that
        // it hits this block 
        // this is testing 34-37

    // describe when the fetch request is unsuccessful 
  })
});
