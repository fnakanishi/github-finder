import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <Link to='/'>
          <i className={ icon } /> { title }
        </Link>
      </h1>
    </nav>
  );

}

Navbar.defaultProps = {
  title: 'NavBar',
  icon: 'fas fa-ellipsis-h'
};

export default Navbar;