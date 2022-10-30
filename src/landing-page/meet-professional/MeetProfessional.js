import React from 'react';

import './MeetProfessional.css';

import Link from '../../_components/link/Link';
import SmallCaption from '../../_components/small-caption/SmallCaption';
import SectionHeader from '../../_components/section-header/SectionHeader';

import miriam from '../../_media/miriam2.png';
import stars from '../../_media/stars.png';

const MeetProfessional = ({ style }) => {
  return (
    <section className='MeetProfessional' style={style}>
      <aside className='MeetProfessional-img-wrapper'>
        <img src={miriam} alt='' />
      </aside>
      <aside className='MeetProfessional-text-wrapper'>
        <img className='MeetProfessional-stars' src={stars} alt='' />
        <SmallCaption text="MEET THE LICENSED PROFESSIONAL" />
        <SectionHeader text="Hello, my name is Miriam!" />
        <article>I offer sessions designed to help you shift subconscious imprinting, uncover your authentic self and align with your purpose. As a licensed social worker and spiritual life coach, I use a critically conscious lens and heart-centered approach to help cultivate inner peace and calm. Let’s go on this journey together as we sort through and make sense of each puzzle piece to form a full picture.</article>
        <Link secondary ariaLabel='Click here to learn more about Miriam'>Read more</Link>
      </aside>
    </section>
  );
};

export default MeetProfessional;