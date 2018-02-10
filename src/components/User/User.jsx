import React, { Component } from 'react';
import './User.css';
import * as api from '../../apiCalls';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {logIn} from '../../actions/actions';

export class User extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      email: ''
    };
  }

  handleInput = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const response = await api.logIn(this.state);
    if (response) {
      const user = await response.data;
      this.props.logIn(user);

      this.props.history.push('/');
      console.log(user)
    } else {
      //display error page that prompts them to try again
      alert('WRONG PASSWORD, IDIOT')
      this.setState({ email: '', password: '' });
    }
  };

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

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({
  logIn: (user) => dispatch(logIn(user))  
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));
