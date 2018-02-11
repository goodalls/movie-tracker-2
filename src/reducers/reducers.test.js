import movies from './movieReducer';
import user from './userReducer';
import * as actions from '../actions/actions';

describe('Reducers', () => {

  describe('Movies-Reducer', () => {
    it('should define the value of the key of movies in the store via ADD_MOVIES', () => {
      const expected = [{ title: 'rocky', poster: '/jasdfive.com' }];
      const mockMovies = [{ title: 'rocky', poster: '/jasdfive.com' }];
      expect(movies( [], actions.addMovies(mockMovies))).toEqual(expected);
    });

    it('should always return the current state as default', () => {
      const expected = [{ title: 'rocky', poster: '/jasdfive.com' }];
      const mockState = [{ title: 'rocky', poster: '/jasdfive.com' }];
      expect(user(mockState, {})).toEqual(expected);
    });
  });
  
  describe('User-Reducer', () => {
    it('should define the user value in the store via LOG_IN', () => {
      const expected = {id: 0, name: 'Nora', password: 'isGreat'};
      const mockUser = { id: 0, name: 'Nora', password: 'isGreat' };
      expect(user( {}, actions.logIn(mockUser))).toEqual(expected);
    });

    it('should reset the user value in the store via LOG_OUT', () => { 
      const expected = {}
      const mockState = { id: 0, name: 'Nora', password: 'isGreat' };
      expect(user(mockState, actions.logOut())).toEqual(expected);
    });

    it('should always return the current state as default', () => {
      const expected = { id: 22, name: 'Amy', password: 'isTheBest'};
      const mockState = { id: 22, name: 'Amy', password: 'isTheBest' };
      expect(user(mockState, {})).toEqual(expected);
    });
  });
});
