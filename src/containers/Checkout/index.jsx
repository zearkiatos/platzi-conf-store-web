/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import '@styles/checkout.css';

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout-content">
        <h3>Order list</h3>
        <div className="checkout-item">
          <div className="checkout-element">
            <h4>ITEM name</h4>
            <span>$10</span>
          </div>
          <button type="button">Delete</button>
        </div>
      </div>
      <aside className="checkout-sidebar">
          <h3>
              Total Price: $10
          </h3>
          <button type="button">Continue</button>
      </aside>
    </div>
  );
};

export default Checkout;
