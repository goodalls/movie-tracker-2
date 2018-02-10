import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

// import apiCalls, { mockApiCalls } from '../../apiCalls.js';
// jest.mock('../../apiCalls.js');

describe('APP', () => {
  it.skip('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should fetchMovies', async () => {
    const wrapper = shallow(<App />);
    api.fetchParse = jest.fn();
    const mockUrl = 'http://mock.com';
    wrapper.instance().fetchMovies();
    expect(wrapper.instance().api.fetchParse()).toHaveBeenCalled();
  });

  it.skip('should map the store correctly', () => {
    const wrapper = shallow(<App />);
    const title = 'RockyIV';
    const poster = '/jeffIsGreat';
    const mockStore = { movieData: [{ title, poster }] };
    const mapped = wrapper.mapStateToProps(mockStore);
    expect(mapped.movieData).toEqual({ title, poster });
  });

  it.skip('should call the dispatch function on MDTP', () => {
    const wrapper = shallow(<App />);
    const mockDispatch = jest.fn();
    const mapped = wrapper.mapDispatchToProps(mockDispatch);
    mapped.addMovies();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
