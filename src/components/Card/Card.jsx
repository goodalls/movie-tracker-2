import React from 'react';
// import './Card.css';

const Card = ({ title, poster }) => {
  return (
    <div className="Card">
      <h2> {title} </h2>
      <img src={`https://image.tmdb.org/t/p/w500/${poster}`} />
    </div>
  );
};

export default Card;
