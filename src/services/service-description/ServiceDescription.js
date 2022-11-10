import React from 'react';

import './ServiceDescription.css';

import Link from '../../_components/link/Link';
import SectionHeader from '../../_components/section-header/SectionHeader';

const ServiceDescription = ({ name, description, image, i, style }) => {
  const label = name === 'Group sessions' ? 'Join a group' : 'Book a free session'
  return (
    <section style={style} className={`ServiceDescription${i % 2 ? ' reverse' : ''}`}>
      <img src={image} alt='' />
      <aside className='ServiceDescription-description'>
        <SectionHeader small text={name} />
        <article>{description}</article>
        <Link primary
          ariaLabel={`Click here to ${label}`}
        >{label}</Link>
      </aside>
    </section>
  );
};

export default ServiceDescription;