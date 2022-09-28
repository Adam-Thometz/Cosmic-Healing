import React from 'react';

import './Button.css';

import arrow from './arrow.png';

const Button = ({ primary = false,  secondary = false, onClick, children }) => {
  const tertiary = !primary && !secondary;
  const className = tertiary ? 'tertiary' : (
    primary ? 'primary' : 'secondary'
  );
  return <button className={`Button ${className}`} onClick={onClick}>
    {children}
    {tertiary ? <img className='Button-arrow' src={arrow} alt='' /> : null}
  </button>;
};

export default Button;