import * as reducer from './reducers';
import * as actions from '../actions/actions';

describe('REDUCERS', () => {
  it('moviesReducer should return state of ADD_MOVIES', () => {
    const expected = [{ title: 'rocky', poster: '/jasdfive.com' }];
    const movies = [{title: 'rocky', poster: '/jasdfive.com'}];
    expect(reducer.moviesReducer(undefined, actions.addMovies(movies))).toEqual(expected)

  });
  
})
