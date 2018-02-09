import { combineReducers } from 'redux';
import movies from './movieReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  movieData: movies,
  user: user
});

export default rootReducer;
