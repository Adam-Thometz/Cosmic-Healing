import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

import Link from '../_components/link/Link';

const Navbar = ({ style }) => {
  const active = ({ isActive }) => isActive ? 'active' : '';
  return (
    <header className='Navbar' style={style}>
      <img src='' alt='' />
      <nav>
        <section className='Navbar-links'>
          <NavLink to='/' className={active} end>Home</NavLink>
          <NavLink to='about-me' className={active}>About Me</NavLink>
          <NavLink to='services' className={active}>Services</NavLink>
        </section>
        <Link primary>Book a free session</Link>
      </nav>
    </header>
  );
};

export default Navbar;