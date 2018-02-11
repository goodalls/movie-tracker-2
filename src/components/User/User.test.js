import React from 'react';
import { shallow } from 'enzyme';
import { User, mapDispatchToProps } from './User';

describe('USER', () => {
  it.skip('should match the snapshot', () => {
    const wrapper = shallow(<User />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleInput', () => {
    it('should setState of email', () => {
      const wrapper = shallow(<User />);
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
      const wrapper = shallow(<User />);
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
      const wrapper = shallow(<User />);
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.instance().handleSubmit(mockEvent);
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });

    it('should reset state to default if wrong password', () => {
      const wrapper = shallow(<User />);
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.reject({
          status: 404,
          json: () => Promise.reject()
        })
      );
      const expected = { email: '', password: '' };
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.setState({ email: 'bar', password: 'foo' });
      wrapper.instance().handleSubmit(mockEvent);
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
