import React from 'react';

const Button = ({ className, onClick, type, disabled, children }) => (
  <button
    className={className}
    onClick={onClick}
    type={type}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
