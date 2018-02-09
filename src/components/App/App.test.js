import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('APP', () => {
  it.skip('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should fetchMovies', async () => {
    
    const api = jest.fn();
    const wrapper = shallow(<App />);

    // api.fetchParse = jest.fn()
    // fetchMovies()
    // expect(api.fetchParse).toHaveBeenCalled;
    
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        json: () =>
          Promise.resolve({
            status: 200,
            movies: []
          })
      })
    );
   

  });
});
