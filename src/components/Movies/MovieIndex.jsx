import React, { Component } from 'react';
import { populateFavorites } from '../../actions/actions';
import { withRouter } from 'react-router-dom';
import * as api from '../../apiCalls';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './MovieIndex.css';

export class MovieIndex extends Component {
  componentDidMount = async () => {
    if (this.props.user.id) {
      this.updateFavorites();
    }
  };

  updateFavorites = async () => {
    const favorites = await api.fetchAllFavorites(this.props.user.id);
    this.props.populateFavorites(favorites);
  };

  handleClick = async event => {
    const { movies, user, favorites } = this.props;
    const user_id = user.id;
    const { id } = event.target;
    if (user_id === undefined){
      alert('Please log in or create an account');
    }
    const clicked = movies.find(movie => movie.movie_id === parseInt(id));
    const movie = Object.assign({}, { ...clicked }, { user_id });
    if (!favorites.find(movie => movie.movie_id === parseInt(id))) {
      const response = await api.addFavorite(movie);
      console.log('response to api.addFav' + response);
    } else {
      const response = await api.removeFavorite(movie);
      console.log(response);
    }
    this.updateFavorites();
  };

  movieCards = () => {
    const { movies, favorites } = this.props;
    return movies.map(movie => {
      const favorite = favorites.map(favorite => favorite.movie_id).includes(movie.movie_id) ? 'favorite' : '';
      return (
        <Card
          movie={movie}
          favorite={favorite}
          handleClick={this.handleClick}
          key={movie.movie_id}
        />
      );
    });
  };

  render() {
    return <div className="movie-index">{this.movieCards()}</div>;
  }
}

export const mapStateToProps = state => ({
  movies: state.movies,
  user: state.user,
  favorites: state.favorites
});

export const mapDispatchToProps = dispatch => ({
  populateFavorites: favorites => dispatch(populateFavorites(favorites))
});

MovieIndex.propTypes = {
  movies: PropTypes.array,
  user: PropTypes.object,
  favorites: PropTypes.array,
  populateFavorites: PropTypes.func
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MovieIndex)
);
