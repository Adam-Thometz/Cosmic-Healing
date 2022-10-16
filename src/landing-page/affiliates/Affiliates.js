import React from 'react';

import './Affiliates.css';

import SmallCaption from '../../_components/small-caption/SmallCaption';

import affiliates from './affiliateInfo';

const Affiliates = ({ style }) => {
  return (
    <section className='Affiliates' style={style}>
      <aside className='Affiliates-text'>
        <SmallCaption text="Working in partnership with..." />
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