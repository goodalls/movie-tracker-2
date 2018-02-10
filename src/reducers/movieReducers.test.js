import movies from './movieReducer';
import * as actions from '../actions/actions';

describe('MovieReducer', () => {
  it('moviesReducer should return state of ADD_MOVIES', () => {
    const expected = [{ title: 'rocky', poster: '/jasdfive.com' }];
    const mockMovie = [{ title: 'rocky', poster: '/jasdfive.com' }];
    expect(movies(undefined, actions.addMovies(mockMovie))).toEqual(
      expected
    );
  });
});
