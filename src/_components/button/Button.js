import React from 'react';

const Button = ({  primary = false,  secondary = false, children }) => {
  const className = `Button ${primary ? 'primary' : (secondary ? 'secondary' : 'tertiery')}`;
  return <button className={className}>{children}</button>;
};

export default Button;