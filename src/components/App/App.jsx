import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { addMovies, logOut } from '../../actions/actions';
import MovieIndex from '../Movies/MovieIndex';
import * as api from '../../apiCalls';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import User from '../User/User';
import NewUser from '../NewUser/NewUser';
import Favorites from '../Favorites/Favorites';
import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = async () => {
    this.fetchMovies();       
  };

  fetchMovies = async () => {
    const movies = await api.fetchParse(api.test);
    const moviesArray = await api.movieCleaner(movies);
    await this.props.addMovies(moviesArray);
  };

  render() {
    const { logOut, user } = this.props;

    return (
      <div className="App">
        <header className="header">
          <NavLink to="/" className="title">
            <h1>Movie Tracker</h1>
          </NavLink>
          <NavLink to="/login" className="nav">
            Sign in
          </NavLink>
          <NavLink to="/new-user" className="nav">
            Create an Account
          </NavLink>
          <NavLink to="/login" className="nav" onClick={logOut}>
            Sign out
          </NavLink>

          {user.id ? (
            <NavLink to="/favorites" className="nav">
              Favorites
            </NavLink>
          ) : null}
        </header>
        <Route exact path="/" component={MovieIndex} />
        <Route path="/login" component={User} />
        <Route path="/new-user" component={NewUser} />
        <Route path="/favorites" component={Favorites} />
      </div>
    );
  }
}

export const mapStateToProps = store => ({
  movies: store.movies,
  user: store.user,
  favorites: store.favorites
});

export const mapDispatchToProps = dispatch => ({
  addMovies: movies => dispatch(addMovies(movies)),
  logOut: () => dispatch(logOut())
});

App.propTypes = {
  addMovies: PropTypes.func,
  logOut: PropTypes.func,
  user: PropTypes.object,
  movies: PropTypes.array,
  favorites: PropTypes.array
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
