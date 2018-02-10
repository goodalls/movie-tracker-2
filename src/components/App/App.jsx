import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { addMovies } from '../../actions/actions';
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

export const mapStateToProps = store => ({
  movies: store.movieData,
  user: store.user
});

export const mapDispatchToProps = dispatch => ({
  addMovies: movies => dispatch(addMovies(movies))
});

App.propTypes = {
  addMovies: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
