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

  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await api.logIn(this.state)
    if (response) {
      const user = response.data
      ///put this user in the store
      this.props.history.push('/')
      console.log(this.props.history)
    } else {
      //display error page that prompts them to try again
    }

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
