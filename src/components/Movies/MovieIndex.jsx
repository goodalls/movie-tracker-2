import React, { Component } from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as api from '../../apiCalls';
import { populateFavorites } from '../../actions/actions';

import './MovieIndex.css';
import PropTypes from 'prop-types';

export class MovieIndex extends Component {
  
  componentDidMount = async () => {
    if (this.props.user.id) {
      this.updateFavorites();
    }
  }

  updateFavorites = async () => {
    const favorites = await api.fetchAllFavorites(this.props.user.id);
    this.props.populateFavorites(favorites)
  }

  handleClick = async (event) => {
    const { movies, user, favorites } = this.props;
    const user_id = user.id;
    const { id } = event.target;
    const clicked = movies.find(movie => movie.movie_id === parseInt(id))
    const movie = Object.assign({}, {...clicked}, {user_id})
    if (!favorites.find(movie => movie.movie_id === parseInt(id))) {
      const response = await api.addFavorite(movie)
      console.log('response to api.addFav' + response)
    } else {
      const response = await api.removeFavorite(movie)
      console.log(response)
    } 
    this.updateFavorites();
  }


  movieCards = () => {
    const { movies } = this.props;
    return movies.map( movie => {
      return <Card movie={movie}
                   handleClick={this.handleClick}
                   key={movie.movie_id} />;
    });
  };

  render() {
    return <div className="movie-index">{this.movieCards()}</div>;
  }
}

const mapStateToProps = state => ({
  movies: state.movies, 
  user: state.user, 
  favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  populateFavorites: favorites => dispatch(populateFavorites(favorites))
})

MovieIndex.propTypes = {
  movies: PropTypes.array, 
  user: PropTypes.object,
  favorites: PropTypes.array, 
  populateFavorites: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieIndex));
