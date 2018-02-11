import { key } from './key';

export const test = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1`;

export const fetchParse = async url => {
  try {
    const response = await fetch(url);
    const parsed = await response.json();
    return parsed;
  } catch (error) {
    return 'fetchParse Err';
  }
};

export const movieCleaner = movies => {
  if (movies === null) {
    return undefined;
  }
  return movies.results.map(movie => {
    const {
      title,
      poster_path,
      id,
      release_date,
      vote_average,
      overview
    } = movie;
    return {
      title,
      poster_path,
      movie_id: id,
      release_date,
      vote_average,
      overview
    };
  });
};

export const logIn = async user => {
  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' }
    });
    const parsed = await response.json();
    if (response.ok) {
      return parsed.data;
    }
  } catch (error) {
    return "Error in logIn";
  }
};

export const createUser = async user => {
  try {
    const response = await fetch('/api/users/new', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' }
    });
    const parsed = await response.json();
    if (response.ok) {
      return parsed;
    }
  } catch (error) {
    return "Error in createUser";
  }
};

export const addFavorite = async (movie) => {
  try {
     const response = await fetch('api/users/favorites/new', { 
      method: 'POST', 
      body: JSON.stringify(movie),
      headers: { 'Content-Type': 'application/json' }
    })
    const parsed = await response.json();
    if (response.ok) {
      return parsed;
    }
  } catch (error) {
    return 'Error in addFavorite';
  }   
}

export const removeFavorite = async (movie) => {
  const { movie_id, user_id } = movie;
  try {
     const response = await fetch(`api/users/${user_id}/favorites/${movie_id}`, { 
      method: 'DELETE', 
      body: JSON.stringify({ movie_id, user_id }),
      headers: { 'Content-Type': 'application/json' }
    })
    const parsed = await response.json();
    if(response.ok) {
      return parsed;
    }
  } catch (error) {
    return 'Error in removeFavorite';
  }   
}

export const fetchAllFavorites = async (userId) => {
  try {
    const response = await fetch(`api/users/${userId}/favorites`)
    const favorites = await response.json()
    return favorites.data
  } catch(error) {
      return 'Error in fetchAllFavorites';
  }
  
}