/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import '@styles/success.css';

const Success = () => {
    return (
        <div className="success">
            <div className="success-content">
                <h2>Pedro, Thank you for your buying</h2>
                <span>Your order will arrive in 3 days to your address</span>
                <div className="success-map">
                    Google Maps
                </div>
            </div>
        </div>
    );
};

export default Success;