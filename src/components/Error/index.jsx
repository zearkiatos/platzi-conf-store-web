/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import '@styles/error.css';

const Error = ({ message }) => {
    return (
        <div className="error-container">
            Error: {message}
        </div>
    );
};

export default Error;