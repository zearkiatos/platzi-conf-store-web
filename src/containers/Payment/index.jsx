/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button';
import AppContext from '@context/AppContext';
import config from '@config';
import { sumTotal } from '@utils';
import '@styles/payment.css';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const renderCart = cart.map((item) => (
    <div className="payment-item" key={item.title}>
      <div className="payment-element">
        <h4>{item.title}</h4>
        <span>${item.price}</span>
      </div>
    </div>
  ));
  const navigate = useNavigate();
  const paypalOptions = {
    clientId: config.PAYPAL.CLIENT_API,
    intent: 'capture',
    currency: 'USD',
  };
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
    width: '100%'
  };
  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      };

      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  };
  return (
    <div className="payment">
      <div className="payment-content">
        <h3>Order Resumen:</h3>
        {renderCart}
        <div className="payment-total">
          Total Price ${sumTotal(cart, 'price')}
        </div>
        <button type="button" className="payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={sumTotal(cart, 'price')}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
          {/* Payment with Paypal */}
        </button>
      </div>
    </div>
  );
};

export default Payment;
