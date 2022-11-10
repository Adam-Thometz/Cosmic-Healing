import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './NavbarResponsive.css';

import Link from '../_components/link/Link';

import hamburger from '../_media/hamburger.png';
import logo from '../_media/logo-flame.png';

const NavbarResponsive = () => {
  const [isHidden, setIsHidden] = useState(true);
  
  const active = ({ isActive }) => isActive ? 'active' : '';
  const toggleLinkDisplay = () => setIsHidden(hidden => !hidden);

  return (
    <header className='NavbarResponsive'>
      <nav className='NavbarResponsive-nav'>
        <img src={hamburger} alt="Click for navigation" onClick={toggleLinkDisplay} />
        <div className={`NavbarResponsive-link-wrapper${isHidden ? ' hidden': ''}`} onClick={toggleLinkDisplay}>
          <div className={`NavbarResponsive-links${isHidden ? ' hidden': ''}`}>
            <section className='NavbarResponsive-main-links'>
              <NavLink to='/' className={active} end>Home</NavLink>
              <NavLink to='about-me' className={active}>About Me</NavLink>
              <NavLink to='services' className={active}>Services</NavLink>
            </section>
            <section className='NavbarResponsive-cta'>
              <Link primary ariaLabel='Click to book a free session'>Book a free session</Link>
            </section>
          </div>
        </div>
      </nav>
      <img src={logo} alt='' />
    </header>
  );
};

export default NavbarResponsive;