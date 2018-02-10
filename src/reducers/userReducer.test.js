import user from './userReducer';
import * as actions from '../actions/actions';

describe('userReducer', () => {
  it('userReducer should return state of LOG_IN', () => {
    const expected = { 
      id: 10,
      name: 'Jeffster',
      password: 'password',
      email: 'isTheMan@aol.com' 
    };
    const mockUser = { 
      id: 10,
      name: 'Jeffster',
      password: 'password',
      email: 'isTheMan@aol.com' 
    };
    expect(user(undefined, actions.logIn(mockUser))).toEqual(expected);
  });
});
