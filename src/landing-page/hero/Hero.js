import React from 'react';

import './Hero.css';

import Link from '../../_components/link/Link';

import miriam from '../../_media/miriam.png';

const Hero = ({ style }) => {
  return (
    <section className='Hero' style={style}>
      <section className='Hero-text-wrapper'>
        <h1>Invest in yourself, become a better you </h1>
        <p>Start your journey today to be on your path to become the person you were always designed to be.</p>
        <div className='Hero-link-wrapper'>
          <Link primary ariaLabel='Click here to browse services'>Browse services</Link>
          <small>Licensed clinician with over 6 years experience delivering results to over 100 clients</small>
        </div>
      </section>
      <aside className='Hero-img-wrapper'>
        <img src={miriam} alt='' />
      </aside>
    </section>
  );
};

export default Hero;