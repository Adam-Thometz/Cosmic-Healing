import React from 'react';

import './Link.css';

import arrow from './arrow.png';

const Link = ({ primary = false, secondary = false, link, children }) => {
  const btnClass = primary ? 'primary' : (
    secondary ? 'secondary' : 'tertiary'
  );
  
  return <a href={link} className={`Link ${btnClass}`}>
    {children}
    {secondary ? <img className='Link-arrow' src={arrow} alt='' /> : null}
  </a>;
};

export default Link;