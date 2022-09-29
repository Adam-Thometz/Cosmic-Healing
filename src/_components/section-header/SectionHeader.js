import React from 'react';

import './SectionHeader.css';

const SectionHeader = ({ text, small = false }) => {
  
  return small ? (
    <h3 className="SectionHeader">{text}</h3>
  ) : (
    <h2 className="SectionHeader">{text}</h2>
  )
};

export default SectionHeader;