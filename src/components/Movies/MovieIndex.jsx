import React, { Component } from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';

export const MovieIndex = ({ moviesData }) => {
  console.log(moviesData);
  // const elements = movies.map((movie, index)=>{
  //   return <Card title={movie.title} poster={movie.poster} key={index}/>
  // })

  return <div>hello</div>;
};

const mapStateToProps = store => {
  moviesData: store.moviesData;
};

export default connect(mapStateToProps)(MovieIndex);
