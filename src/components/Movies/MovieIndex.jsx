import React, { Component } from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import './MovieIndex.css';
import PropTypes from 'prop-types';

export class MovieIndex extends Component {
  movieCards = () => {
    const { moviesData } = this.props;
    return moviesData.map((movie, index) => {
      return <Card title={movie.title} poster={movie.poster} key={index} />;
    });
  };

  render() {
    return <div className="movie-index">{this.movieCards()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    moviesData: state.movieData
  };
};

MovieIndex.propTypes = {
  moviesData: PropTypes.array
};

export default connect(mapStateToProps)(MovieIndex);
