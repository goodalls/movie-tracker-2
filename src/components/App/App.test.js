import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapDispatchToProps, mapStateToProps } from './App';
import { shallow } from 'enzyme';

describe('APP', () => {
  it.skip('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should define movies props for the container', () => {
    const title = 'RockyIV';
    const poster = '/jeffIsGreat';
    const mockStore = { movieData: [{ title, poster }] };
    const expected = [{ poster: '/jeffIsGreat', title: 'RockyIV' }];
    const mapped = mapStateToProps(mockStore);
    expect(mapped.movies).toEqual(expected);
  });

  it('should define user props for the container', () => {
    const id = 0;
    const name = 'jeffIsGreat';
    const mockStore = { user: {id, name} };
    const expected = { id: 0, name: 'jeffIsGreat' };
    const mapped = mapStateToProps(mockStore);
    expect(mapped.user).toEqual(expected);
  });

  it('should call the dispatch function on MDTP', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addMovies();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
