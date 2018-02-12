import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ movie, handleClick, favorite }) => {
  const { title, movie_id, poster_path } = movie;
  return (
    <article className={'Card ' + favorite} id={movie_id}>
      <h2> {title} </h2>
      <img
        height="100"
        width="100"
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={`${title} movie poster`}
      />
      <button className="card-button" onClick={handleClick} id={movie_id}>
        Favorite
      </button>
    </article>
  );
};

Card.propTypes = {
  favorite: PropTypes.string,
  handleClick: PropTypes.func,
  movie: PropTypes.object,
  poster: PropTypes.string,
  title: PropTypes.string
};

export default Card;
