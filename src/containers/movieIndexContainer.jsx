import { connect } from 'react-redux'
import MovieIndex from '../components/Movies/MovieIndex';

const mapStateToProps = state => {
  return {
    moviesData: state.movieData
  };
};

export default connect(mapStateToProps)(MovieIndex);
