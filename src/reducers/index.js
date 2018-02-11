import { combineReducers } from 'redux';
import movies from './movieReducer';
import user from './userReducer';
import favorites from './favoritesReducer';


const rootReducer = combineReducers({
  movies, 
  user, 
  favorites
});

export default rootReducer;
