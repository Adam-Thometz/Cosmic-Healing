import React from 'react';

import './CanHelpWith.css'

import SmallCaption from '../../_components/small-caption/SmallCaption';
import SectionHeader from '../../_components/section-header/SectionHeader';

import hand from '../../_media/landing-page/hand.png';

const CanHelpWith = ({ style }) => {
  return (
    <section className='CanHelpWith' style={style}>
      <aside className='CanHelpWith-img-wrapper'>
        <img src={hand} alt='' />
      </aside>
      <aside className='CanHelpWith-text-wrapper'>
        <SmallCaption text="Understand yourself" />
        <SectionHeader text="Learn how to" />
        <ul className='CanHelpWith-slider-wrapper'>
          <li className='CanHelpWith-slider-text'>increase emotional intelligence</li>
          <li className='CanHelpWith-slider-text'>improve motivation and focus</li>
          <li className='CanHelpWith-slider-text'>strengthen relationships</li>
          <li className='CanHelpWith-slider-text'>boost self esteem</li>
        </ul>
      </aside>
    </section>
  );
};

export default CanHelpWith;