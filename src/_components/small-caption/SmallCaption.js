import React from 'react';

import './SmallCaption.css';

const SmallCaption = ({ text, color = 'black' }) => (
  <small className='SmallCaption' style={{ color }}>{text}</small>
);

export default SmallCaption;