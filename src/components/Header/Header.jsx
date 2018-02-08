import React from 'react';
import { NavLink } from 'react-router-dom'

// needs to be a redux container to keep state of the 
//sign in input to show favorties when signed in or "sign in" when not.
const Header = () => {
  return (
    <div>
      <h1>Movie Tracker</h1>

      <NavLink to='/user' className='nav'>Sign in</NavLink>
    </div>
  );
};

export default Header;
