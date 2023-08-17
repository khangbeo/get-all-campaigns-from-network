import React from 'react';

const InputField = ({ id, value, onChange, placeholder, disabled }) => (
  <div>
    <input
      className="input input-accent"
      type="text"
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
    />
  </div>
);

export default InputField;
