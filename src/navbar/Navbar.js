import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

import Button from '../_components/button/Button';

const Navbar = ({ style }) => {
  const active = ({ isActive }) => isActive ? 'active' : '';
  return (
    <nav className='Navbar' style={style}>
      <img src='' alt='' />
      <section className='Navbar-links'>
        <NavLink to='/' className={active} end>Home</NavLink>
        <NavLink to='about-me' className={active}>About Me</NavLink>
        <NavLink to='services' className={active}>Services</NavLink>
      </section>
      <Button primary>Book a free session</Button>
    </nav>
  );
};

export default Navbar;