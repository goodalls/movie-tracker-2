import React, { Component } from 'react';
import './User.css';

class User extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  

  render () {
    return (
      <div>
        <form>
          <label for="email">Email: </label>
          <input type="text" id="email" value={this.state.email}/>
          <label for="password">Password: </label>
          <input type="text" id="password" value={this.state.password} />
          <input type="submit" />
        </form>
        </div>
      )
  }
}

export default User;