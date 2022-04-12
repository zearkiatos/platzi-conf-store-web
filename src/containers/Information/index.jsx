/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/information.css';

const Information = () => {
  return (
    <div className="information">
      <div className="information-content">
        <div className="information-head">
          <h2>Contact Information</h2>
          <div className="information-form">
            <form action="">
              <input type="text" placeholder="Full Name" name="name" />
              <input type="email" placeholder="Email" name="email" />
              <input type="text" placeholder="Address" name="address" />
              <input
                type="text"
                placeholder="Department Number"
                name="department"
              />
              <input type="text" placeholder="City" name="city" />
              <input type="text" placeholder="Country" name="country" />
              <input type="text" placeholder="State" name="state" />
              <input type="text" placeholder="Postal Code" name="postal-code" />
              <input
                type="text"
                placeholder="Phone Number"
                name="phone-number"
              />
            </form>
          </div>
          <div className="information-buttons">
            <button type="button" className="information-back">
              Back
            </button>
            <Link to="/checkout/payment">
              <button type="button" className="information-next">
                Pay
              </button>
            </Link>
          </div>
        </div>
      </div>
      <aside className="information-sidebar">
        <h3>Order</h3>
        <div className="information-item">
          <div className="information-element">
            <h4>ITEM Name</h4>
            <span>$10</span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Information;
