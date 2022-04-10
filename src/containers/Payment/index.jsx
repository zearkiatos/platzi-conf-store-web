/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import '@styles/payment.css';

const Payment = () => {
    return (
        <div className="payment">
            <div className="payment-content">
                <h3>
                    Order Resumen:
                </h3>
                <button type="button" className="payment-button">
                    Payment with Paypal
                </button>
            </div>
        </div>
    )
};

export default Payment;