import React, { Component } from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';


export const MovieIndex = (props) => {
  console.log(props);
  // const elements = movies.map((movie, index)=>{
  //   return <Card title={movie.title} poster={movie.poster} key={index}/>
  // })

  return <div>hello</div>;
};

const mapStateToProps = store => {
  movieData: store.movieData;
};

export default connect(mapStateToProps)(MovieIndex);
