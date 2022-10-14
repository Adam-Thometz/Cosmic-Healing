import React from 'react';

import './Link.css';

import arrow from './arrow.png';

const Link = ({ primary = false, link, children }) => {
  const btnClass = primary ? 'primary' : 'secondary'
  return <a href={link} className={`Link ${btnClass}`}>
    {children}
    {!primary ? <img className='Link-arrow' src={arrow} alt='' /> : null}
  </a>;
};

export default Link;