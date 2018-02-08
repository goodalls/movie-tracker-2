import { combineReducers } from 'redux';
import moviesReducer from './reducers';

const rootReducer = combineReducers({
  movieData: moviesReducer
});

export default rootReducer;
