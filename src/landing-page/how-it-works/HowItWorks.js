import React from 'react';

import './HowItWorks.css';

import Link from '../../_components/link/Link';
import SectionHeader from '../../_components/section-header/SectionHeader';
import SmallCaption from '../../_components/small-caption/SmallCaption';

import paperPlane from '../../_media/landing-page/paper-plane.png';

const HowItWorks = ({ style }) => {
  return (
    <section className='HowItWorks' style={style}>
      <aside className='HowItWorks-text-wrapper'>
        <SmallCaption text="HOW IT WORKS.." />
        <SectionHeader text="Start in three easy steps" />
        <ol>
          <li className='HowItWorks-step'>
            <SectionHeader small text="Browse services" />
            <p>Browse services and pick the right path for you.</p>
          </li>
          <li className='HowItWorks-step'>
            <SectionHeader small text="Get connected" />
            <p>Answer a few questions or schedule a free appointment and a clincian will reach out.</p>
          </li>
          <li className='HowItWorks-step'>
            <SectionHeader small text="Begin" />
            <p>Congratulations on taking the first step towards a rewarding experience. </p>
          </li>
        </ol>
        <Link primary>Get Started</Link>
      </aside>
      <aside className='HowItWorks-img-wrapper'>
        <img src={paperPlane} alt='' />
      </aside>
    </section>
  );
};

export default HowItWorks;