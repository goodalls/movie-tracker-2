/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { User, mapDispatchToProps } from './User';
import * as api from '../../apiCalls';

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
      wrapper = shallow(<User logIn={jest.fn()} history={[]} />);
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.instance().handleSubmit(mockEvent);
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });

    it('should login the user by sending state to api.logIn', () => {
      wrapper = shallow(<User logIn={jest.fn()} history={[]} />);
      api.logIn = jest.fn();
      const mockState = { password: 'suh', email: 'dude@dude.com' };
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.setState(mockState);
      wrapper.instance().handleSubmit(mockEvent);
      expect(api.logIn).toHaveBeenCalledWith(mockState);
    });

    it.skip('should take the response from DB and send to store', () => {
      wrapper = shallow(<User logIn={jest.fn()} history={[]} />);
      api.logIn = jest
        .fn()
        .mockImplementation(() =>
          Promise.resolve({
            ok: true,
            json: () =>
              Promise.resolve({
                data: {
                  id: 0,
                  password: 'suh',
                  email: 'dude@dude.com',
                  name: 'jhun'
                }
              })
          })
        );
      const mockState = { password: 'suh', email: 'dude@dude.com' };
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.setState(mockState);
      wrapper.instance().handleSubmit(mockEvent);
      expect(wrapper.props().logIn).toHaveBeenCalled();
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
