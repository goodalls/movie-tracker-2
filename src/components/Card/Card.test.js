import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('CARD', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Card movie={{title:'Gone With The Wind'}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
