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
