import React from 'react';
import { NewUser , mapDispatchToProps } from './NewUser';
import { shallow, mount } from 'enzyme';
import * as api from '../../apiCalls'

describe('NEW_USER', () => {
  let wrapper;
  beforeEach( () => {
    wrapper = shallow(<NewUser />); 
  })

  describe('when rendered', () => {
    it.skip('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  })
    
  describe('handleInput', () => {
    describe('when given a key event', () => {
      let event;
      
      it('should update the state with name', () => {  
        expect(wrapper.state('name')).toEqual('')
        event = {
          target: {
            value: 'Nora',
            name: 'name'
          }
        }
        wrapper.instance().handleInput(event);
        expect(wrapper.state('name')).toEqual('Nora')
      });

      it('should update the state with email', () => {  
        expect(wrapper.state('email')).toEqual('')
        event = {
          target: {
            value: 'nora@gmail.com',
            name: 'email'
          }
        }
        wrapper.instance().handleInput(event);
        expect(wrapper.state('email')).toEqual('nora@gmail.com')
      });

      it('should update the state with password', () => {  
        expect(wrapper.state('password')).toEqual('')
        event = {
          target: {
            value: 'chicken123',
            name: 'password'
          }
        }
        wrapper.instance().handleInput(event);
        expect(wrapper.state('password')).toEqual('chicken123')
      });

    })
    
  });

  describe('handleSubmit', () => {
      let mockEvent;
      let url;
      let mockFetchParams;
      let mockData;
      let expected

    describe('when passed a state of new name, email, and password', () => {
      beforeAll( () => {

        wrapper.state = {
          name: 'Nora',
          email: 'nora@gmail.com',
          password: 'chicken123',
        };

       mockEvent = { preventDefault: jest.fn() }
      })


      it('should call createUser', async() => {
        // user = await JSON.stringify(wrapper.state);

        window.fetch = await jest.fn().mockImplementation(() => {
          return {status: "success", message: "New user created", id: 21}
        }) 
        
        wrapper.instance().handleSubmit(mockEvent);

        expect(window.fetch).toHaveBeenCalled()
      })
    })

    describe('when given an email already in the database', () => {
 
      it('should call setState with empty strings', () => {

        expected = { name: '', email: '', password: '' };

        wrapper.setState({ email: 'bar', password: 'foo' });
        wrapper.instance().newUserError();

        expect(wrapper.state()).toEqual(expected);
      })
    })

  });

  
  describe('MDTP', () => {
    let mockDispatch;
    let mapped;
    it('should call the dispatch function on MDTP', () => {
      mockDispatch = jest.fn();
      mapped = mapDispatchToProps(mockDispatch);
      mapped.logIn();
      expect(mockDispatch).toHaveBeenCalled();
    });

  })  
});