import * as actions from './actions';

describe('ACTIONS', () => {
  it('should create an ADD_MOVIES action', () => {
    const mockMovies = [];
    const expected = {
      type: 'ADD_MOVIES',
      movies: mockMovies
    };
    expect(actions.addMovies(mockMovies)).toEqual(expected);
  });

  it('should create a LOG_IN action', () => {
    const mockUser = {};
    const expected = {
      type: 'LOG_IN',
      user: mockUser
    };
    expect(actions.logIn(mockUser)).toEqual(expected);
  });

  it('should create a LOG_OUT action', () => {
    const expected = {
      type: 'LOG_OUT'
    };
    expect(actions.logOut()).toEqual(expected)
  });

  it('should create an ADD_FAVORITE action', () => {
    const mockFav = {};
    const expected = {
      type: 'ADD_FAVORITE',
      favorite: mockFav
    };
    expect(actions.addFavorite(mockFav)).toEqual(expected);
  });

  it('should create a REMOVE_FAVORITE action', () => {
    const mockNotFav = {};
    const expected = {
      type: 'REMOVE_FAVORITE',
      unFavorite: mockNotFav
    }; 
    expect(actions.removeFavorite(mockNotFav)).toEqual(expected)
  });

  it('should create an POPULATE_FAVORITES action', () => {
    const mockFavs = [];
    const expected = {
      type: 'POPULATE_FAVORITES',
      favorites: mockFavs
    };
    expect(actions.populateFavorites(mockFavs)).toEqual(expected);
  });
});

