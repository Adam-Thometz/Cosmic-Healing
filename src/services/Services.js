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
      name={name}
      description={description}
      image={image}
      i={i}
    />
  });
  
  return (
    <main className='Services'>
      <SmallCaption text='DO WHAT IS BEST FOR YOU' />
      <SectionHeader text="Choose your ideal environment" />
      {services}
      <FAQ />
    </main>
  );
};

export default Services;