import React from 'react';

import './ServiceDescription.css';

import Button from '../../_components/button/Button';
import SectionHeader from '../../_components/section-header/SectionHeader';

const ServiceDescription = ({ name, description, image, i }) => {
  return (
    <section className={`ServiceDescription${i % 2 ? ' reverse' : ''}`}>
      <img src={image} alt='' />
      <aside className='ServiceDescription-description'>
        <SectionHeader small text={name} />
        <article>{description}</article>
        <Button primary>Book a free session</Button>
      </aside>
    </section>
  );
};

export default ServiceDescription;