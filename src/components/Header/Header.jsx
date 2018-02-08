import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import User from '../User/User';

// needs to be a redux container to keep state of the 
//sign in input to show favorties when signed in or "sign in" when not.
const Header = () => {
  return (
    <div>
      <h1>Movie Tracker</h1>
      <NavLink to='/login' className='nav'>Sign in</NavLink>
      <Route exact path='/login' component={User} />
    </div>
  );
};

export default Header;
