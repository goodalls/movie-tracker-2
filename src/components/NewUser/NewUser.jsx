import React, { Component } from 'react';
import './NewUser.css';
import * as api from '../../apiCalls';
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
      const userId = await response.id;
      this.props.history.push('/');
      const { email, password } = this.state 
      const user = Object.assign({}, {email}, {password})
      console.log(user)
      
      // const loggedIn = await api.logIn(user);
      // if (loggedIn) {
      //   const user =
      // }


      //use the id from that obj
      //fetch again to the database
      //get the corresponding user obj for that id
      //send that obj to login action / store
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

});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NewUser)
);
