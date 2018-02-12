import React from 'react';
import PropTypes from 'prop-types'; 
import './Card.css';

const Card = ({ movie, handleClick, favorite }) => {
  const { title, movie_id, poster_path } = movie;
  return (
    <article className={ "Card " + favorite }  id={ movie_id }>
      <h2> {movie.title} </h2>
      <img
        height="100"
        width="100"
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={`${title} movie poster`}
      />
      <button className="card-button" onClick={handleClick} id={movie_id}>Favorite</button>
    </article>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
  movie: PropTypes.object,
  handleClick: PropTypes.func
};

export default Card;
