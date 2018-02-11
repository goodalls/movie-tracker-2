import { key } from './key';

export const test = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1`;

export const fetchParse = async url => {
  const response = await fetch(url);
  const parsed = await response.json();
  return parsed;
};

export const movieCleaner = movies => {
  if (movies === null) {
    return undefined
  }
  return movies.results.map(movie => {
    const { 
      title, 
      poster_path, 
      id, 
      release_date, 
      vote_average, 
      overview } = movie;
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
      console.log(parsed)
      return parsed.data
    } 
  } catch(error){
    return false
  }
}  
  
export const createUser = async (user) => {
  try {
    const response = await fetch('/api/users/new', {
      method: 'POST', 
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' }
    })
    const parsed = await response.json();
    if (response.ok) {
      return parsed;
    }
  } catch (error) {
    console.log('error block');
    return false;
  }
};

// export default { fetchParse, test, movieCleaner, logIn };
