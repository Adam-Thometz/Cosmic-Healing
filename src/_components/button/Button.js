import React from 'react';

import './Button.css';

import arrow from './arrow.png';

const Button = ({ primary = false, onClick, children }) => {
  const btnClass = primary ? 'primary' : 'secondary'
  return <button className={`Button ${btnClass}`} onClick={onClick}>
    {children}
    {!primary ? <img className='Button-arrow' src={arrow} alt='' /> : null}
  </button>;
};

export default Button;