import React from 'react';

import './Method.css';

const Method = ({ name, img, description }) => {
  return (
    <figure className='Method'>
      <img src={img} alt={name} />
      <figcaption>
        <h3>{name}</h3>
        <p>{description}</p>
      </figcaption>
    </figure>
  )
}

export default Method