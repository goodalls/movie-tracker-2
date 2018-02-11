import React from 'react';
import {NewUser} from './NewUser';
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
    //defaults to an empty state
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
    describe('when passed a state of new name, email, and password', () => {

      beforeAll( () => {
        wrapper.state = {
          name: 'Nora',
          email: 'nora@gmail.com',
          password: 'chicken123',
        }

        let event;
      })


      it('should call createUser with expected params', () => {

        event = 'click';
        api.createUser = jest.fn();

        wrapper.handleSubmit(event);

        expect(api.createUser()).toHaveBeenCalledWith(wrapper.state);
      })
      it('should call logIn with expected params', () => {

      })
      it('should redirect the user to the home page', () => {

      })
    })
    describe('when given an email already in the database', () => {
      it('should send and alert', () => {

      })
      it('should call setState with empty strings', () => {

      })
    })

  });
  
  // describe('MSTP', () => {
  //   it('should', () => {});
  // });

  describe.skip('MDTP', () => {
    it('should', () => {});
  });
});
