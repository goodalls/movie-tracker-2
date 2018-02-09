import React from 'react';
import './Card.css';

const Card = ({ title, poster }) => {
  return (
    <div className="Card">
      <h2> {title} </h2>
      <img height='100' width='100' src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={`${title} movie poster`}/>
    </div>
  );
};

export default Card;
