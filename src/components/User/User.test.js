import React from 'react';
import { shallow } from 'enzyme';
import { User } from './User';

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
    it.skip('should', async () => {
      mockEvent = { preventDefault: jest.fn() };
    });
  });

  describe('MSTP', () => {
    it.skip('should define user props for the container MSTP', () => {
      const id = 0;
      const name = 'jeffIsGreat';
      const mockStore = { user: { id, name } };
      const expected = { id: 0, name: 'jeffIsGreat' };
      const mapped = mapStateToProps(mockStore);
      expect(mapped.user).toEqual(expected);
    });
  });

  describe('MDTP', () => {
    it.skip('should call the dispatch function on MDTP', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.addMovies();
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
