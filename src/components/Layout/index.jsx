/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import '@styles/layout.css';

const Layout = ({ children }) => {
    return (
        <div className='main'>
            <Header />
                {children}
            <Footer />
        </div>
    )
};

export default Layout;