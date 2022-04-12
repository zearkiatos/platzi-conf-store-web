/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">
        <Link to="/">PlatziConf Store 🛒</Link>
      </h1>
      <div className="header-checkout">
        <Link to="/checkout">
            <i className="fa fa-basket-shopping" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
