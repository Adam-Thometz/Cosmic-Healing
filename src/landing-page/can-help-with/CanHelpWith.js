import React from 'react';

import './CanHelpWith.css'

import SmallCaption from '../../_components/small-caption/SmallCaption';
import SectionHeader from '../../_components/section-header/SectionHeader';

import hand from '../../_media/hand.png';

const CanHelpWith = () => {
  const headerText = <>Learn how to <span className='CanHelpWith-moving-text'>improve emotional intelligence</span></>

  return (
    <section className='CanHelpWith'>
      <aside className='CanHelpWith-img-wrapper'>
        <img src={hand} alt='' />
      </aside>
      <aside className='CanHelpWith-text-wrapper'>
        <SmallCaption text="UNDERSTAND YOURSELF AND YOUR PURPOSE" />
        <SectionHeader text={headerText} />
      </aside>
    </section>
  );
};

export default CanHelpWith;