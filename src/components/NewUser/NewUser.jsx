import React, { Component } from 'react';
import './NewUser.css';
import * as api from '../../apiCalls';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {createUser} from '../../actions/actions';


export  class NewUser extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      email: '',
      name: ''
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            onChange={this.handleInput}
            value={this.state.name}
            />
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={this.handleInput}
            value={this.state.email}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="text"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInput}
          />  
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewUser));
