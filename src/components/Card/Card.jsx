import React from 'react';
import PropTypes from 'prop-types'; 
import './Card.css';

const Card = ({ movie, handleClick }) => {
  return (
    <div className="Card" id={movie.movie_id}>
      <h2> {movie.title} </h2>
      <img
        height="100"
        width="100"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={`${movie.title} movie poster`}
      />
      <button onClick={handleClick} id={movie.movie_id}>Favorite</button>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
  movie: PropTypes.object,
  handleClick: PropTypes.func
};

export default Card;
