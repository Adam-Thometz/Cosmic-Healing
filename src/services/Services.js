import React from 'react';

import './Services.css';

import SectionHeader from '../_components/section-header/SectionHeader';
import SmallCaption from '../_components/small-caption/SmallCaption';
import ServiceDescription from './service-description/ServiceDescription';
import FAQ from './faq/FAQ';

import serviceDescriptions from './serviceDescriptions';

const Services = () => {
  const services = serviceDescriptions.map(({
    name,
    description,
    image
  }, i) => {
    return <ServiceDescription
      style={{ "--i": i+2 }}
      name={name}
      description={description}
      image={image}
      i={i}
    />
  });
  
  return (
    <main className='Services'>
      <section style={{ "--i": 1 }}>
        <SmallCaption text='DO WHAT IS BEST FOR YOU' />
        <SectionHeader text="Choose your ideal environment" />
      </section>
      {services}
      <FAQ style={{ "--i": 4 }} />
    </main>
  );
};

export default Services;