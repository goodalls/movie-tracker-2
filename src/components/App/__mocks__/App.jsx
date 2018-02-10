
/* eslint-disable */

import React, { Component } from 'react';
import { addMovies } from '../../actions/actions';
import { connect } from 'react-redux';
import { Route, NavLink, Switch, withRouter } from 'react-router-dom';
import MovieIndex from '../Movies/MovieIndex';
import User from '../User/User';
import { NewUser } from '../NewUser/NewUser';
import * as api from '../../apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = async () => {
    this.fetchMovies();
  };

  fetchMovies = async () => {
    api.fetchParse(url);
    api.movieCleaner(object);
    return {
      title: 'title'
      poster: 'poster'
    }
  };

  render() {
    return (
      <div className="wrapper">
        <header className="header">
          <h1>
            <span className="movie">Movie</span> Tracker
          </h1>
          <NavLink to="/login" className="nav">
            Sign in
          </NavLink>
          <NavLink to="/new-user" className="nav">
            Create an Account
          </NavLink>
        </header>
        <Route exact path="/" component={MovieIndex} />
        <Route path="/login" component={User} />
        <Route path="/new-user" component={NewUser} />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  movies: store.movieData
});

const mapDispatchToProps = dispatch => ({
  addMovies: movies => dispatch(addMovies(movies))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
