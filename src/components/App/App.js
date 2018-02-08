import React, { Component } from 'react';
import { addMovies } from '../../actions/actions';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'

import Header from '../Header/Header';
import MovieIndex from '../Movies/MovieIndex';
import User from '../User/User';

import api from '../../apiCalls';
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
    console.log(moviesArray)
    await this.props.addMovies(moviesArray);
  };

  render() {
   
    return (
      <div>
        <Header />
        <Route exact path='/' component={MovieIndex} />
        <Route exact path='/user' component={User} /> 
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
