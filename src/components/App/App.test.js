import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

import apiCalls, { mockApiCalls } from '../../apiCalls.js';
jest.mock('../../apiCalls.js');

describe('APP', () => {
  it.skip('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should fetchMovies', async () => {
    const wrapper = shallow(<App />);
    
    api.fetchParse = jest.fn();
    fetchMovies();
    
    expect(api.fetchParse).toHaveBeenCalled();

  });
});
