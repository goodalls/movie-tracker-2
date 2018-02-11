import React from 'react';
import { shallow } from 'enzyme';
import { User, mapDispatchToProps } from './User';

describe('USER', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<User />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state ', () => {
    expect(wrapper.state().password).toEqual('');
    expect(wrapper.state().email).toEqual('');
  });

  describe('handleInput', () => {
    it('should setState of email', () => {
      const expected = 'howdy';
      const mockEvent = {
        preventDefault: jest.fn(),
        target: {
          name: 'email',
          value: 'howdy'
        }
      };
      wrapper.instance().handleInput(mockEvent);
      wrapper.update();
      expect(wrapper.state().email).toEqual(expected);
    });

    it('should setState of password', () => {
      const expected = 'whats up doc';
      const mockEvent = {
        preventDefault: jest.fn(),
        target: { name: 'password', value: 'whats up doc' }
      };
      wrapper.instance().handleInput(mockEvent);
      wrapper.update();
      expect(wrapper.state().password).toEqual(expected);
    });
  });

  describe('handleSubmit', () => {
    it('should prevent default', async () => {
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.instance().handleSubmit(mockEvent);
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });
  });

  describe('userReject', () => {
    it('should reset state to default if wrong password', () => {
      const expected = { email: '', password: '' };
      wrapper.setState({ email: 'bar', password: 'foo' });
      wrapper.instance().userReject();
      expect(wrapper.state()).toEqual(expected);
    });
  });

  describe('MDTP', () => {
    it('should call the dispatch function on MDTP', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.logIn();
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
