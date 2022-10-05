import React from 'react';

import './HowItWorks.css';

import Button from '../../_components/button/Button';
import SectionHeader from '../../_components/section-header/SectionHeader';
import SmallCaption from '../../_components/small-caption/SmallCaption';

import paperPlane from '../../_media/paper-plane.png';

const HowItWorks = ({ style }) => {
  return (
    <section className='HowItWorks' style={style}>
      <aside className='HowItWorks-text-wrapper'>
        <SmallCaption text="HOW IT WORKS.." />
        <SectionHeader text="Start in three easy steps" />
        <ol>
          <li>
            <SectionHeader small text="Motivational Interviewing" />
            <p>Interaction design is the practice of designing interactive digital products, environments, systems, and services.</p>
          </li>
          <li>
            <SectionHeader small text="Motivational Interviewing" />
            <p>Interaction design is the practice of designing interactive digital products, environments, systems, and services.</p>
          </li>
          <li>
            <SectionHeader small text="Motivational Interviewing" />
            <p>Interaction design is the practice of designing interactive digital products, environments, systems, and services.</p>
          </li>
        </ol>
        <Button primary>Get started</Button>
      </aside>
      <aside className='HowItWorks-img-wrapper'>
        <img src={paperPlane} alt='' />
      </aside>
    </section>
  );
};

export default HowItWorks;