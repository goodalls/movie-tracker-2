import React, { Component } from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addFavorite } from '../../actions/actions';

import './MovieIndex.css';
import PropTypes from 'prop-types';

export class MovieIndex extends Component {

  handleClick = (event) => {
    const { favorites, movies, user, addFavorite } = this.props;
    const user_id = user.id;
    const { id } = event.target;
    if (!favorites) {
      movies.find(movie => movie.movie_id === parseInt(id))
    }

    //add or remove from favorites array 
    //use our actions which are add and remove
    //compare movie_id to favorites array to see which action
    // conditional to decide whether to dispatch ADD or REMOVE
    //CHECK TO SEe if it's in the favorites array
    //if it's in there we remove
    //if it's not we add
    // Add Favorite - /users/favorites/new
    // To save a favorite you must send into the 
    // body: movie_id, user_id and title, poster_path, 
    // release_date, vote_average, overview. 
    // Keep in mind the response only gives the new favorite id
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
  favorites: state.favorites, 
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  addFavorite: movie => dispatch(addFavorite(movie)) 
})

MovieIndex.propTypes = {
  movies: PropTypes.array
};

export default withRouter(connect(mapStateToProps, null)(MovieIndex));
