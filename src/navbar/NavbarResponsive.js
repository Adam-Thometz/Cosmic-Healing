import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';

import './NavbarResponsive.css';

import Link from '../_components/link/Link';

import hamburger from '../_media/hamburger.png';

const NavbarResponsive = () => {
  const links = useRef();
  const active = ({ isActive }) => isActive ? 'active' : '';
  
  const showLinks = () => {
    links.current.style.display = 
      links.current.style.display === 'none' ? 'flex' : 'none'
  }

  return (
    <header className='NavbarResponsive'>
      <nav className='NavbarResponsive-nav'>
        <img src={hamburger} alt="Click for navigation" onClick={showLinks} />
        <div style={{ display: 'none' }} ref={links} className='NavbarResponsive-links'>
          <NavLink to='/' className={active} end>Home</NavLink>
          <NavLink to='about-me' className={active}>About Me</NavLink>
          <NavLink to='services' className={active}>Services</NavLink>
          <Link primary>Book a free session</Link>
        </div>
      </nav>
      <img src={''} alt='' />
    </header>
  );
};

export default NavbarResponsive;