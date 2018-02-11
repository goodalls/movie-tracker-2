export const addMovies = movies => {
  return {
    type: 'ADD_MOVIES',
    movies
  };
};

export const logIn = user => {
  return {
    type: 'LOG_IN',
    user
  };
};

export const logOut = () => {
  return {
    type: 'LOG_OUT'
  };
};

export const addFavorite = favorite => {
  return {
    type: 'ADD_FAVORITE',
    favorite
  };
};

export const removeFavorite = unFavorite => {
  return {
    type: 'REMOVE_FAVORITE',
    unFavorite
  };
};

export const populateFavorites = favorites => {
  return {
    type: 'POPULATE_FAVORITES',
    favorites
  };
};
