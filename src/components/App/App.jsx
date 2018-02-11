import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { addMovies, logOut } from '../../actions/actions';
import MovieIndex from '../Movies/MovieIndex';
import * as api from '../../apiCalls';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import User from '../User/User';
import NewUser from '../NewUser/NewUser';
import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = async () => {
    this.fetchMovies();
  };

  componentWillReceiveProps = () => {
    
  }
  
  fetchMovies = async () => {
    const movies = await api.fetchParse(api.test);
    const moviesArray = await api.movieCleaner(movies);
    await this.props.addMovies(moviesArray);
  };


  render() {
    const {logOut} = this.props;

    return (
      <div className="wrapper">
        <header className="header">
          <NavLink to="/" className="title"><h1>Movie Tracker</h1></NavLink>
          <NavLink to="/login" className="nav">
            Sign in
          </NavLink>
          <NavLink to="/new-user" className="nav">
            Create an Account
          </NavLink>
          <NavLink to="/login" className="nav" onClick={logOut} >
            Sign out
          </NavLink>
        </header>
        <Route exact path="/" component={MovieIndex} />
        <Route path="/login" component={User} />
        <Route path="/new-user" component={NewUser} />
      </div>
    );
  }
}

export const mapStateToProps = store => ({
  movies: store.movies,
  user: store.user
});

export const mapDispatchToProps = dispatch => ({
  addMovies: movies => dispatch(addMovies(movies)),
  logOut: () => dispatch(logOut())
});

App.propTypes = {
  addMovies: PropTypes.func,
  logOut: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
