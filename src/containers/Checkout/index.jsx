/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Link } from 'react-router-dom';
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
          <button type="button">
            <i className="fa fa-trash-can" />
          </button>
        </div>
      </div>
      <aside className="checkout-sidebar">
          <h3>
              Total Price: $10
          </h3>
          <Link to="/checkout/information">
            <button type="button">Continue</button>
          </Link>
      </aside>
    </div>
  );
};

export default Checkout;
