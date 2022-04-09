/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import '@styles/header.css';

const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">PlatziConf Store 🛒</h1>
            <div className="header-checkout">
                Checkout
            </div>
        </header>
    )
};

export default Header;