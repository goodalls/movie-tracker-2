import React from 'react';
import MovieIndex from './MovieIndex';
import { shallow } from 'enzyme';

describe('MOVIE_INDEX', () => {
  it.skip('should match the snapshot', () => {
    const wrapper = shallow(<MovieIndex />);
    expect(wrapper).toMatchSnapshot();
  });
});
