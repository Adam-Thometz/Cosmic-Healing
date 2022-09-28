import React from 'react';

import './Button.css';

import arrow from './arrow.png';

const Button = ({ primary = false,  secondary = false, children }) => {
  const className = `Button ${primary ? 'primary' : (secondary ? 'secondary' : 'tertiary')}`;
  const tertiary = !primary && !secondary
  return <button className={className}>{children}{tertiary ? <img className='Button-arrow' src={arrow} alt='' /> : null}</button>;
};

export default Button;