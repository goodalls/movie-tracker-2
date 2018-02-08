import React, { Component } from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';

export class MovieIndex extends Component {
  movieCards = () => {
    const { moviesData } = this.props;
    return moviesData.map((movie, index) => {
      return <Card title={movie.title} poster={movie.poster} key={index} />;
    });
  };

  render() {
    return <div>{this.movieCards()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    moviesData: state.movieData
  };
};

export default connect(mapStateToProps)(MovieIndex);
