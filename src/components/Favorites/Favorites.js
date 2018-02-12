import React, { Component } from 'react';
import { populateFavorites } from '../../actions/actions';
import { withRouter } from 'react-router-dom';
import * as api from '../../apiCalls';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './Favorites.css';

export class Favorites extends Component {
  updateFavorites = async () => {
    const favorites = await api.fetchAllFavorites(this.props.user.id);
    this.props.populateFavorites(favorites);
  };

  handleClick = async event => {
    const { movies, user, favorites } = this.props;
    const user_id = user.id;
    const { id } = event.target;
    if (user_id === undefined) {
      alert('Please log in or create an account');
    }
    const clicked = movies.find(movie => movie.movie_id === parseInt(id, 10));
    const movie = Object.assign({}, { ...clicked }, { user_id });
    if (!favorites.find(movie => movie.movie_id === parseInt(id, 10))) {
      await api.addFavorite(movie);
    } else {
      await api.removeFavorite(movie);
    }
    this.updateFavorites();
  };

  render() {
    const { favorites } = this.props;

    const favoriteCards = favorites.map(movie => {
      return (
        <Card
          movie={movie}
          favorite="favorite"
          handleClick={this.handleClick}
          key={movie.movie_id}
        />
      );
    });

    return (
      <div className="favorites">
        {favoriteCards}
      </div>);
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

Favorites.propTypes = {
  user: PropTypes.object,
  populateFavorites: PropTypes.func,
  favorites: PropTypes.array
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Favorites)
);
