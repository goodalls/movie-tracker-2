import React, { Component } from 'react';
import './User.css';
import api from '../../apiCalls';

class User extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      email: ''
    };
  }

  handleInput= (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    api.logIn(this.state);
    this.setState({ email: '', password: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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

export default User;
