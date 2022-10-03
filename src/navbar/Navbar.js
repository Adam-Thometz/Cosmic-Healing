import React from 'react';

import './Navbar.css';

import Button from '../_components/button/Button';

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <img src='' alt='' />
      <section className='Navbar-links'>
        <a tabIndex={0} href='#'>Home</a>
        <a tabIndex={0} href='#aboutMe'>About Me</a>
        <a tabIndex={0} href='#services'>Services</a>
      </section>
      <Button primary>Book a free session</Button>
    </nav>
  );
};

export default Navbar;