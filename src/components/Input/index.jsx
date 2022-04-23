/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import '@styles/input.css';

const Input = ({ name, type, placeholder, error }) => {
  return (
    <div>
      <input
        className={error?.context.label === name ? 'input-error' : ''}
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default Input;
