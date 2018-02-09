export const addMovies = movies => {
  return {
    type: 'ADD_MOVIES',
    movies
  };
};

export const logIn = userObject => {
  return {
    type: 'LOG_IN',
    userObject
  };
};
