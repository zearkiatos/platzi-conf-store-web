/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '@context/AppContext';
import '@styles/checkout.css';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => removeFromCart(product);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  const renderCartList =
    cart.length > 0 ? (
      cart.map((item) => (
        <div className="checkout-item">
          <div className="checkout-element">
            <h4>{item.title}</h4>
            <span>${item.price}</span>
          </div>
          <button type="button" onClick={handleRemove(item)}>
            <i className="fa fa-trash-can" />
          </button>
        </div>
      ))
    ) : (
      <h3> Without any order</h3>
    );

  const renderTotal = cart.length > 0 && (
    <aside className="checkout-sidebar">
      <h3>Total Price: {`$${sumTotal()}`}</h3>
      <Link to="/checkout/information">
        <button type="button">Continue</button>
      </Link>
    </aside>
  );
  return (
    <div className="checkout">
      <div className="checkout-content">
        <h3>Order list</h3>
        {renderCartList}
      </div>
      {renderTotal}
    </div>
  );
};

export default Checkout;
