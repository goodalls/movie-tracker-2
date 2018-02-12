import React, { Component } from 'react';
import { populateFavorites } from '../../actions/actions';
import { withRouter } from 'react-router-dom';
import * as api from '../../apiCalls';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { MovieIndex } from '../Movies/MovieIndex'
import './Favorites.css';

export class Favorites extends Component {
  

  render() 

  {
    const { favorites } = this.props;

  const favoriteCards = favorites.map(movie => {
      return (
        <Card
          movie={movie}
          favorite='favorite'
          handleClick={MovieIndex.handleClick}
          key={movie.movie_id}
        />
      );
    });
    return ( 
      <div className="movie-index">
        { favoriteCards }
      </div>
    )}
};

export const mapStateToProps = state => ({
  favorites: state.favorites
});

export const mapDispatchToProps = dispatch => ({
  populateFavorites: favorites => dispatch(populateFavorites(favorites))
});


export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Favorites)
);