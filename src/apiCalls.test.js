import * as api from './apiCalls';

describe('apiCalls', () => {
  let mockUrl;

  describe('fetchParse', () => {
    beforeAll(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve([{
              title: 'Citizen Kane'
            }])
        })
      );
      mockUrl = 'http://mock.com';
    });

    it('should call fetch with the expected params', () => {
      api.fetchParse(mockUrl);
      expect(window.fetch).toHaveBeenCalledWith(mockUrl);
    });

    it('should return a parsed data object for a given URL', () => {
      const expectedMovies = [{ title: 'Citizen Kane' }]
      expect(api.fetchParse(mockUrl)).resolves.toEqual(expectedMovies);
    });

    it('should error if the request is rejected', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.reject({
          status: 404,
          json: () => Promise.reject('fetchParse Err')
        })
      );
      const error = await api.fetchParse(mockUrl);
      expect(error).toEqual('fetchParse Err');
    });
  });

  describe('movieCleaner', () => {
    let mockData;
    let expected;

    describe('when given data from the Movie Database API', () => {
      beforeEach(() => {
        mockData = {
          results: [
            {
              id: 36534,
              title: 'Frozen',
              poster_path: '/8PADfwpMWK0ASDe4Z5lALCf0zGu.jpg', 
              release_date: 2015, 
              vote_average: 8, 
              overview: "I dunno but the song LET IT GO seems apt today", 
              PIZZA: 'TACOS'
            },
            {
              id: 494,
              title: 'Gone with the Wind',
              poster_path: '/4o1yeosjSFMaI9pe1rOkYcZ6hHO.jpg', 
              release_date: 1939, 
              vote_average: 8, 
              overview: "An overly romanticized version of American Reconstruction", 
              PIZZA: 'TACOS'
            }
          ],
          total_pages: 20,
          total_results: 400
        };

        expected = [
          {
            movie_id: 36534,
            title: 'Frozen',
            poster_path: '/8PADfwpMWK0ASDe4Z5lALCf0zGu.jpg', 
            release_date: 2015, 
            vote_average: 8, 
            overview: "I dunno but the song LET IT GO seems apt today", 
          },
          {
            movie_id: 494,
            title: 'Gone with the Wind',
            poster_path: '/4o1yeosjSFMaI9pe1rOkYcZ6hHO.jpg', 
            release_date: 1939, 
            vote_average: 8, 
            overview: "An overly romanticized version of American Reconstruction", 
          }
        ];
      });

      it('returns an array of cleaned movie objects', () => {
        expect(api.movieCleaner(mockData)).toEqual(expected);
      });
    });

    describe('when given null', () => {
      beforeEach(() => {
        mockData = null;
      });

      it('returns undefined', () => {
        expect(api.movieCleaner(mockData)).toBeUndefined();
      });
    });

    describe('when given an object with no results ', () => {
      beforeEach(() => {
        mockData = {
          results: [],
          total_pages: 20,
          total_results: 400
        };
      });

      it('returns an empty array', () => {
        expect(api.movieCleaner(mockData)).toHaveLength(0);
      });
    });
  });

  describe('logIn', () => {
    beforeAll(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve({ data: 
              { id: 0, 
                password: 'tacos', 
                email: 'will@aol.com', 
                name: 'Will' } })
        })
      );
    });

    it('makes a fetch request to the database', () => {
      const mockUser = { password: 'tacos', email: 'will@aol.com' }
      const mockUrl = '/api/users'
      const mockRequestObj =  {
          method: 'POST',
          body: JSON.stringify(mockUser),
          headers: { 'Content-Type': 'application/json' }}
      const expected = JSON.stringify(mockUser)
      api.logIn(mockUser);
      expect(window.fetch).toHaveBeenCalledWith(mockUrl, mockRequestObj);
    })

    it('it returns a user object with an ID for the store', () => {
      const mockUser = { password: 'tacos', email: 'will@aol.com' }
      const expected = { id: 0, password: 'tacos', email: 'will@aol.com', name: 'Will' }
      const userObj = api.logIn(mockUser);
      expect(userObj).resolves.toEqual(expected)
    })

    it('it returns an error if the request is unsuccessful', () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.reject({
          status: 404,
          json: () => Promise.reject('Error in logIn')
        })
      );
      const mockUser = { password: 'tacos', email: 'will@aol.com' }
      const expected = 'Error in logIn'
      const error = api.logIn(mockUser);
      expect(error).resolves.toEqual(expected)
    })
  });

  describe('createUser', () => {
    // beforeAll(() => {
    //   window.fetch = jest.fn().mockImplementation(() =>
    //     Promise.resolve({
    //       ok: true,
    //       json: () =>
    //         Promise.resolve({ data: 
    //           { id: 0, 
    //             password: 'tacos', 
    //             email: 'will@aol.com', 
    //             name: 'Will' } })
    //     })
    //   );
    // });
    // it('')
  })

  describe('addFavorite', () => {
    
  })

  describe('removeFavorite', () => {
    
  })

  describe('fetchAllFavorites', () => {
    
  })

});
