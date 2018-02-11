import movies from './movieReducer';
import user from './userReducer';
import favorites from './favoritesReducer';
import * as actions from '../actions/actions';

describe('Reducers', () => {
  describe('Movies-Reducer', () => {
    it('should always return the current state as default', () => {
      const expected = [{ title: 'rocky', poster: '/jasdfive.com' }];
      const mockState = [{ title: 'rocky', poster: '/jasdfive.com' }];
      expect(user(mockState, {})).toEqual(expected);
    });

    it('should define the value of the key of movies in the store via ADD_MOVIES', () => {
      const expected = [{ title: 'rocky', poster: '/jasdfive.com' }];
      const mockMovies = [{ title: 'rocky', poster: '/jasdfive.com' }];
      expect(movies([], actions.addMovies(mockMovies))).toEqual(expected);
    });
  });

  describe('User-Reducer', () => {
    it('should always return the current state as default', () => {
      const expected = { id: 22, name: 'Amy', password: 'isTheBest' };
      const mockState = { id: 22, name: 'Amy', password: 'isTheBest' };
      expect(user(mockState, {})).toEqual(expected);
    });

    it('should define the user value in the store via LOG_IN', () => {
      const expected = { id: 0, name: 'Nora', password: 'isGreat' };
      const mockUser = { id: 0, name: 'Nora', password: 'isGreat' };
      expect(user({}, actions.logIn(mockUser))).toEqual(expected);
    });

    it('should reset the user value in the store via LOG_OUT', () => {
      const expected = {};
      const mockState = { id: 0, name: 'Nora', password: 'isGreat' };
      expect(user(mockState, actions.logOut())).toEqual(expected);
    });
  });

  describe('Favorites Reducer', () => {
    it('should return the current state of favorites by default', () => {
      const mockState = [{ title: 'Arrival', poster: '/arrival.jpg' }];
      const expected = [{ title: 'Arrival', poster: '/arrival.jpg' }];
      expect(favorites(mockState, {})).toEqual(expected);
    });

    it('should define the value of user favorites via POPULATE_FAVORITES', () => {
      const mockFavMovies = [{ title: 'Arrival', poster: '/arrival.jpg' }];
      const expected = [{ title: 'Arrival', poster: '/arrival.jpg' }];
      expect(favorites([], actions.populateFavorites(mockFavMovies))).toEqual(
        expected
      );
    });

    it('should add a favorited movie to the favorites key in store via ADD_FAVORITE', () => {
      const mockFav = { title: 'The Thin Man', poster: 'thinMan.jpg' };
      const mockState = [{ title: 'Dead Man', poster: 'deadMan.jpg' }];
      const expected = [
        { title: 'Dead Man', poster: 'deadMan.jpg' },
        { title: 'The Thin Man', poster: 'thinMan.jpg' }
      ];
      expect(favorites(mockState, actions.addFavorite(mockFav))).toEqual(
        expected
      );
    });

    it('should remove an un-favorited movie from the favorites array in the store via REMOVE_FAVORITE', () => {
      const mockUnFav = { title: 'The Thin Man', poster: 'thinMan.jpg', movie_id: 2 };
      const mockState = [
        { title: 'Dead Man', poster: 'deadMan.jpg', movie_id: 1 },
        { title: 'The Thin Man', poster: 'thinMan.jpg', movie_id: 2 }
      ];
      const expected = [{ title: 'Dead Man', poster: 'deadMan.jpg', movie_id: 1 }];
      expect(favorites(mockState, actions.removeFavorite(mockUnFav))).toEqual(
        expected
      );
    });
  });
});
