import React from 'react';
import SmallCaption from '../_components/small-caption/SmallCaption';
import Link from '../_components/link/Link';

import './Footer.css';

const Footer = () => {
  return (
    <footer className='Footer'>
      <section className='Footer-menu'>
        <SmallCaption color='#FBAD7D' text="VESTA HEALING" />
        <Link link='/'>Home</Link>
        <Link link='/about-me'>About Me</Link>
        <Link link='/services'>Services</Link>
        <Link link='/services#faq'>FAQ</Link>
      </section>
      <section className='Footer-menu'>
        <SmallCaption color='#FBAD7D' text="COMPANY" />
        <Link link='/'>Contact Us</Link>
      </section>
    </footer>
  );
};

export default Footer;