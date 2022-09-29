import React from 'react';
import SmallCaption from '../_components/small-caption/SmallCaption';

import './Footer.css';

const Footer = () => {
  return (
    <footer className='Footer'>
      <section className='Footer-menu'>
        <SmallCaption color='#FBAD7D' text="COSMIC HEALING" />
        <a href='#'>Home</a>
        <a href='#'>About Me</a>
        <a href='#'>Services</a>
        <a href='#'>FAQ</a>
      </section>
      <section className='Footer-menu'>
        <SmallCaption color='#FBAD7D' text="COMMUNITY" />
        <a href='#'>Webinars</a>
        <a href='#'>Resources</a>
        <a href='#'>Partnership</a>
      </section>
      <section className='Footer-menu'>
        <SmallCaption color='#FBAD7D' text="COMPANY" />
        <a href='#'>Blog</a>
        <a href='#'>Careers</a>
        <a href='#'>Contact us</a>
      </section>
    </footer>
  );
};

export default Footer;