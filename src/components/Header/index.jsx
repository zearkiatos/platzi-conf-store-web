/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import { Link } from 'react-router-dom';
import '@styles/header.css';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  return (
    <header className="header">
      <h1 className="header-title">
        <Link to="/">PlatziConf Store 🛒</Link>
      </h1>
      <div className="header-checkout">
        <Link to="/checkout">
          <i className="fa fa-basket-shopping" />
        </Link>
        {cart.length > 0 && <div className="header-alert">{cart.length}</div>}
      </div>
    </header>
  );
};

export default Header;
