/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import '@styles/input.css';

const Input = ({ name, type, placeholder, errorMessage }) => {
    return (
        <div>
            <input type={type} placeholder={placeholder} name={name} />
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
}

export default Input;