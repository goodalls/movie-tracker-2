import React, { Component } from 'react';
import './NewUser.css';
import * as api from '../../apiCalls';
import { logIn } from '../../actions/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createUser } from '../../actions/actions';

export class NewUser extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const response = await api.createUser(this.state);
    if (response) {
      const { email, password } = this.state 
      const credentials = Object.assign({}, {email}, {password});
      const logInResponse = await api.logIn(credentials);
      if (logInResponse) {
        const user = await logInResponse.data
        this.props.logIn(user)
        this.props.history.push('/');
      }
    } else {
      alert('TRY AGAIN');
      this.setState({name:'', email:'', password:''})
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            onChange={this.handleInput}
            value={this.state.name}
          />
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            onChange={this.handleInput}
            value={this.state.email}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="text"
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
  logIn: user => dispatch(logIn(user))
});

export default withRouter(
  connect(null, mapDispatchToProps)(NewUser)
);
