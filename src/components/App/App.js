import React, { Component } from 'react';
import  MovieIndex  from '../Movies/MovieIndex';
import { addMovies } from '../../actions/actions';
import { connect } from 'react-redux';
import Header from '../Header/Header';
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
    await this.props.addMovies(moviesArray);
  };

  render() {
   
    return (
      <div>
        <Header />
        <MovieIndex />
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
