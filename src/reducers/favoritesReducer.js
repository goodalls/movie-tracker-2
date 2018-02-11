const favorites = (state = [], action) => {
  switch (action.type) {
    case 'POPULATE_FAVORITES':
      return action.favorites;
    case 'ADD_FAVORITE': 
      return [...state, action.favorite];
    case 'REMOVE_FAVORITE': 
      return state.filter(movie => movie.id !== action.unFavorite.id);
    default: 
      return state;
  }
}
export default favorites;