import { key } from './key';

const rootUrl = `https://api.themoviedb.org/3/movie/550?api_key=${key}`;

const test = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

const fetchParse = async url => {
  const response = await fetch(url);
  const parsed = await response.json();
  return parsed;
};

const movieCleaner = movies => {
  return movies.results.map(movie => {
    return {
      title: movie.title,
      poster: movie.poster_path
    };
  });
};

export default { fetchParse, test, movieCleaner };
