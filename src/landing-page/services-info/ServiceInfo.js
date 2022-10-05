import React from 'react';

import './ServiceInfo.css';

import SectionHeader from '../../_components/section-header/SectionHeader';
import SmallCaption from '../../_components/small-caption/SmallCaption';
import ServiceCard from './service-card/ServiceCard';

import options from './serviceOptions';

const ServiceInfo = ({ style }) => {
  return (
    <section className='ServiceInfo' style={style}>
      <div className='ServiceInfo-header'>
        <SmallCaption text="DO WHAT IS BEST FOR YOU" />
        <SectionHeader text="Choose your ideal environment" />
      </div>
      <div className='ServiceInfo-options'>
        {options.map(o => (
          <ServiceCard 
            service={o.service}
            description={o.description}
            link={o.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceInfo;