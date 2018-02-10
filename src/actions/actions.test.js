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

  it('should create an LOG_IN action', () => {
    const mockUser = {};
    const expected = {
      type: 'LOG_IN',
      user: mockUser
    };
    expect(actions.logIn(mockUser)).toEqual(expected);
  });
});

