import React, { useEffect, useState } from 'react';

import './CanHelpWith.css'

import SmallCaption from '../../_components/small-caption/SmallCaption';
import SectionHeader from '../../_components/section-header/SectionHeader';

import hand from '../../_media/landing-page/hand.png';
import text from './canHelpWithText';

const CanHelpWith = ({ style }) => {
  const [textIdx, setTextIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIdx(idx => idx === text.length-1 ? 0 : idx+1);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <section className='CanHelpWith' style={style}>
      <aside className='CanHelpWith-img-wrapper'>
        <img src={hand} alt='' />
      </aside>
      <aside className='CanHelpWith-text-wrapper'>
        <SmallCaption text="Understand yourself" />
        <SectionHeader text="Learn how to" />
        <div className='CanHelpWith-slider-wrapper'>
          <p className='CanHelpWith-slider-text'>{text[textIdx]}</p>
        </div>
      </aside>
    </section>
  );
};

export default CanHelpWith;