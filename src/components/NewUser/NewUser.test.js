import React from 'react';
import NewUser from './NewUser';
import { shallow } from 'enzyme';

describe('NEW_USER', () => {
  it.skip('should match the snapshot', () => {
    const wrapper = shallow(<NewUser />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleInput', () => {
    it('should', () => {
    
    });
  });
  
  describe('handleSubmit', () => {
    it('should', () => {
    
    });
  });
  
  // describe('MSTP', () => {
  //   it('should', () => {});
  // });

  describe('MDTP', () => {
    it('should', () => {});
  });
});
