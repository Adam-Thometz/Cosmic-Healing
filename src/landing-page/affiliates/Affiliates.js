import React from 'react';

import './Affiliates.css';

import SmallCaption from '../../_components/small-caption/SmallCaption';

import affiliates from './affiliateInfo';

const Affiliates = () => {
  return (
    <section className='Affiliates'>
      <aside className='Affiliates-text'>
        <SmallCaption text="PROUD TO BE WORKING IN PARTNERSHIP WITH.." />
      </aside>
      <aside className='Affiliates-icons'>
        {affiliates.map(a => (
          <img className='Affiliates-icon' src={a.icon} alt={a.alt} />
        ))}
      </aside>
    </section>
  );
};

export default Affiliates;