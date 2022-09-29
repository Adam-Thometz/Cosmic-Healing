import React from 'react'

import './ServiceCard.css';

import Button from '../../_components/button/Button'
import SectionHeader from '../../_components/section-header/SectionHeader'

const ServiceCard = ({ service, description, link }) => {
  return (
    <div className='ServiceCard'>
      <SectionHeader small text={service} />
      <article className='ServiceCard-description'>{description}</article>
      <Button>Learn more</Button>
    </div>
  )
}

export default ServiceCard