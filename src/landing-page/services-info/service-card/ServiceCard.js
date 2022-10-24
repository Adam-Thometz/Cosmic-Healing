import React from 'react'

import './ServiceCard.css';

import Link from '../../../_components/link/Link';
import SectionHeader from '../../../_components/section-header/SectionHeader';

const ServiceCard = ({ service, description, link }) => {
  return (
    <div className='ServiceCard'>
      <SectionHeader small text={service} />
      <article className='ServiceCard-description'>{description}</article>
      <Link secondary to={link} >Learn more</Link>
    </div>
  );
};

export default ServiceCard;