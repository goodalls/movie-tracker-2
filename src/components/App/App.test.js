import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount, render } from 'enzyme';
import * as api from '../../apiCalls';

describe('APP', () => {
  it.skip('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should fetchMovies', async () => {
    const wrapper = shallow(<App />);
    const mockUrl = 'http://mock.com';
    api.fetchParse = jest.fn(mockUrl);
    wrapper.instance().fetchMovies();
    expect(api.fetchParse()).toHaveBeenCalledWith(mockUrl);
  });

  it.skip('should map the store correctly', () => {
    const wrapper = shallow(<App />);
    const title = 'RockyIV';
    const poster = '/jeffIsGreat';
    const mockStore = { movieData: [{ title, poster }] };
    // const mapped = spyOn(wrapper.instance(), 'mapStateToProps').and.callThrough();
    // const mapped = wrapper.instance().mapStateToProps(mockStore);
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
