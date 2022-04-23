/* eslint-disable react/jsx-fragments */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AppContext from '@context/AppContext';
import { sumTotal } from '@utils';
import '@styles/checkout.css';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => removeFromCart(product);

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
      <h3>Total Price: {`$${sumTotal(cart, 'price')}`}</h3>
      <Link to="/checkout/information">
        <button type="button">Continue</button>
      </Link>
    </aside>
  );
  return (
    <Fragment>
      <Helmet>
        <title> Platzi Conf Store - Checkout </title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@zearkiatos" />
        <meta name="twitter:creator" content="@zearkiatos" />
        <meta name="twitter:title" content="Platzi Conf Store" />
        <meta name="twitter:description" content="Platzi Conf Store" />
        <meta
          name="twitter:image"
          content="https://github.com/zearkiatos.png?size=200"
        />
        <meta property="og:title" content="Platzi Conf Store" />
        <meta property="og:description" content="Platzi Conf Store" />
        <meta
          property="og:image"
          content="https://github.com/zearkiatos.png?size=200"
        />
        <meta
          property="og:url"
          content="https://platzi-conf-store-web.firebaseapp.com/"
        />
        <meta property="og:site_name" content="Platzi Conf Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      <div className="checkout">
        <div className="checkout-content">
          <h3>Order list</h3>
          {renderCartList}
        </div>
        {renderTotal}
      </div>
    </Fragment>
  );
};

export default Checkout;
