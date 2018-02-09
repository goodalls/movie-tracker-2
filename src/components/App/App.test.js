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
    const call = fetchMovies();
    
    expect(call).toHaveCalled(api.fetchParse);

  });
});
