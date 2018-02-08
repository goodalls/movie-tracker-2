import * as actions from './actions';

describe('ACTIONS', () => {
  it('should create an ADD_MOVIES action', () => {
    const movies = [];
    const expected = {
      type: 'ADD_MOVIES',
      movies
    };
    expect(actions.addMovies(movies)).toEqual(expected);
  });
});

