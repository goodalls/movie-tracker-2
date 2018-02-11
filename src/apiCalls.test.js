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
      const expectedRequestObj = {
          method: 'POST',
          body: JSON.stringify(mockUser),
          headers: { 'Content-Type': 'application/json' }}
      api.logIn(mockUser);
      expect(window.fetch).toHaveBeenCalledWith(mockUrl, expectedRequestObj);
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
    beforeAll(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve({ data: { email : "BAchristie@turing.io",
                                      id : 10, 
                                      name : "Christie",
                                      password : "badass"},
                              message : "Retrieved ONE User",
                              status :"success" })
        })
      );
    });

    it('should call fetch with the expected parameters', () => {
      const mockUser = { password: 'badass', email: 'BAchristie@turing.io', name: 'Christie' }
      const mockUrl = '/api/users/new'
      const expectedRequestObj =  {
          method: 'POST',
          body: JSON.stringify(mockUser),
          headers: { 'Content-Type': 'application/json' }}
      api.createUser(mockUser);
      expect(window.fetch).toHaveBeenCalledWith(mockUrl, expectedRequestObj);
    })

    it('should return a parsed object with a status of success', async () => {
      const mockUser = { password: 'badass', email: 'BAchristie@turing.io', name: 'Christie' }
      const expected = { data: 
                          { email : "BAchristie@turing.io",
                            id : 10, 
                            name : "Christie",
                            password : "badass" },
                        message : "Retrieved ONE User",
                        status :"success" }
      const user = await api.createUser(mockUser);
      expect(user).toEqual(expected)
    })

    it('it returns an error if the request is unsuccessful', () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.reject({
          status: 404,
          json: () => Promise.reject('Error in logIn')
        })
      );
      const mockUser = { password: 'tacos', email: 'will@aol.com' }
      const expected = 'Error in createUser'
      const error = api.createUser(mockUser);
      expect(error).resolves.toEqual(expected)
    })
  })

  describe('addFavorite', () => {
    beforeAll(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve({status: "success", message: "Movie was added to favorites", id: 10})
        })
      );
    });

    it('calls fetch with the correct parameters', () => {
      const mockMovie = {
            movie_id: 36534,
            title: 'Frozen',
            poster_path: '/8PADfwpMWK0ASDe4Z5lALCf0zGu.jpg', 
            release_date: 2015, 
            vote_average: 8, 
            overview: "I dunno but the song LET IT GO seems apt today"
          }
      const mockUrl = 'api/users/favorites/new'
      const expectedRequestObj = {
          method: 'POST',
          body: JSON.stringify(mockMovie),
          headers: { 'Content-Type': 'application/json' }}
      api.addFavorite(mockMovie)
      expect(window.fetch).toHaveBeenCalledWith(mockUrl, expectedRequestObj);
    })

    it('returns a nice message if the addition was successful', () => {
      const mockMovie = {
            movie_id: 36534,
            title: 'Frozen',
            poster_path: '/8PADfwpMWK0ASDe4Z5lALCf0zGu.jpg', 
            release_date: 2015, 
            vote_average: 8, 
            overview: "I dunno but the song LET IT GO seems apt today", 
            user_id: 10
          }
      const expected = {status: "success", message: "Movie was added to favorites", id: 10}
      const added = api.addFavorite()
      expect(added).resolves.toEqual(expected)
    })

    it('it returns an error if the request is unsuccessful', () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.reject({
          status: 404,
          json: () => Promise.reject('Error in addFavorite')
        })
      );
      const mockMovie = {
            movie_id: 36534,
            title: 'Frozen',
            poster_path: '/8PADfwpMWK0ASDe4Z5lALCf0zGu.jpg', 
            release_date: 2015, 
            vote_average: 8, 
            overview: "I dunno but the song LET IT GO seems apt today", 
            user_id: 30
          }
      const expected = 'Error in addFavorite'
      const error = api.addFavorite(mockMovie);
      expect(error).resolves.toEqual(expected)
    })

  })

  describe('removeFavorite', () => {
    it('calls fetch with the correct parameters', () => {
      const mockMovie = {
            movie_id: 36534,
            title: 'Frozen',
            poster_path: '/8PADfwpMWK0ASDe4Z5lALCf0zGu.jpg', 
            release_date: 2015, 
            vote_average: 8, 
            overview: "I dunno but the song LET IT GO seems apt today", 
            user_id: 30
          }
      const expectedUrl = 'api/users/30/favorites/36534'
      const expectedRequestObj = {
          method: 'DELETE',
          body: JSON.stringify({ movie_id: mockMovie.movie_id, user_id: mockMovie.user_id}),
          headers: { 'Content-Type': 'application/json' }}
      api.removeFavorite(mockMovie)
      expect(window.fetch).toHaveBeenCalledWith(expectedUrl, expectedRequestObj);
    })

    it('returns a nice message if the deletion was successful', () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve({status: "success", message: "1 row was deleted."})
        })
      );
      const mockMovie = {
            movie_id: 36534,
            title: 'Frozen',
            poster_path: '/8PADfwpMWK0ASDe4Z5lALCf0zGu.jpg', 
            release_date: 2015, 
            vote_average: 8, 
            overview: "I dunno but the song LET IT GO seems apt today", 
            user_id: 10
          }
      const expected = {status: "success", message: "1 row was deleted."}    
      const removed = api.removeFavorite(mockMovie)
      expect(removed).resolves.toEqual(expected)
    })

    it('it returns an error if the request is unsuccessful', () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.reject({
          status: 404,
          json: () => Promise.reject('Error in removeFavorite')
        })
      );
      const mockMovie = {
            movie_id: 36534,
            title: 'Frozen',
            poster_path: '/8PADfwpMWK0ASDe4Z5lALCf0zGu.jpg', 
            release_date: 2015, 
            vote_average: 8, 
            overview: "I dunno but the song LET IT GO seems apt today", 
            user_id: 30
          }
      const expected = 'Error in removeFavorite'
      const error = api.removeFavorite(mockMovie);
      expect(error).resolves.toEqual(expected)
    })
  })

  describe('fetchAllFavorites', () => {
    beforeAll(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve({ data: [
                              { title: 'Bravheart' }, 
                              { title: 'Trolls'} ] } )
        })
      );
    });
    it('should call fetch with the correct url', () => {
      const mockUserId = 3;
      const expectedUrl = 'api/users/3/favorites'
      api.fetchAllFavorites(mockUserId);
      expect(window.fetch).toHaveBeenCalledWith(expectedUrl);
    })

    it('should return an array of favorited movie objects', () => {
      const mockUserId = 3;
      const expected = [ { title: 'Bravheart' }, 
                         { title: 'Trolls'} ]
      const movies = api.fetchAllFavorites(mockUserId);
      expect(movies).resolves.toEqual(expected)
    })

    it('it returns an error if the request is unsuccessful', () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.reject({
          status: 404,
          json: () => Promise.reject('Error in fetchAllFavorites')
        })
      );
      const mockUserId = 3;
      const expected = 'Error in fetchAllFavorites'
      const error = api.fetchAllFavorites(mockUserId);
      expect(error).resolves.toEqual(expected)
    })
  })

});
