import React from 'react';
import './Card.css';

const Card = ({ title, poster }) => {
  return (
    <div className="Card">
      <div className='favorite' >
      </div>
      <img height='250' width='200' src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={`${title} movie poster`}/>
    </div>
  );
};

export default Card;
