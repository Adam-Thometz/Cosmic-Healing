import React from 'react';

import './Hero.css';

import Button from '../_components/button/Button';

const Hero = () => {
  return (
    <header className='Hero'>
      <section className='Hero-text-wrapper'>
        <h1>Break the cycle, become a better you</h1>
        <p>Start your journey today to be on your path to become the person you were always designed to be.</p>
        <div className=''>
          <Button secondary>Browse services</Button>
        </div>
      </section>
      <aside className='Hero-img-wrapper'>
      <img src='' alt='' />
      </aside>
    </header>
  );
};

export default Hero;