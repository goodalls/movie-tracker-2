import React from 'react';
import { shallow } from 'enzyme';
import User from './User';

describe('USER', () => {
  it.skip('should match the snapshot', () => {
    const wrapper = shallow(<User />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleInput', () => {
    it('should setState of email and password', () => {
      
    
    });
    
  });

  describe('handleSubmit', () => {
    it('should', async () => {
      const event = {preventDefault: jest.fn()};
    
    });
  });

  describe('MSTP', () => {
    
  });

  describe('MDTP', () => {
    
  });
  
});
