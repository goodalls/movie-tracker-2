import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('CARD', () => {
  it.skip('should match the snapshot', () => {
    const wrapper = shallow(<Card/>);
    expect(wrapper).toMatchSnapshot();
  });
});
