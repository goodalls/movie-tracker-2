import React, { Component } from 'react';
import { addMovies } from '../../actions/actions';
import { connect } from 'react-redux';
import { Route, NavLink, Switch, withRouter } from 'react-router-dom';

// import Header from '../Header/Header';
import MovieIndex from '../Movies/MovieIndex';
import User from '../User/User';

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
    const testRun = await api.fetchParse(api.test);
    const moviesArray = await api.movieCleaner(testRun);
    await this.props.addMovies(moviesArray);
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
        </header>
        <Route exact path="/" component={MovieIndex} />
        <Route path="/login" component={User} />
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