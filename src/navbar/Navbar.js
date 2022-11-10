import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

import Link from '../_components/link/Link';

import logo from '../_media/logo-full.png';

const Navbar = ({ style }) => {
  const active = ({ isActive }) => isActive ? 'active' : '';
  return (
    <header style={style}>
      <nav className='Navbar'>
        <img src={logo} alt='' />
        <section className='Navbar-links'>
          <NavLink to='/' className={active} end>Home</NavLink>
          <NavLink to='about-me' className={active}>About Me</NavLink>
          <NavLink to='services' className={active}>Services</NavLink>
        </section>
        <Link primary ariaLabel='Click to book a free session'>Book a free session</Link>
      </nav>
    </header>
  );
};

export default Navbar;