import React from 'react';

import './Link.css';

import arrow from './arrow.png';

const Link = ({ primary = false, secondary = false, link, children, ariaLabel = '' }) => {
  const btnClass = primary ? 'primary' : (
    secondary ? 'secondary' : 'tertiary'
  );
  
  return <a tabIndex={0} href={link} aria-label={ariaLabel} className={`Link ${btnClass}`}>
    {children}
    {secondary ? <img className='Link-arrow' src={arrow} alt='' /> : null}
  </a>;
};

export default Link;