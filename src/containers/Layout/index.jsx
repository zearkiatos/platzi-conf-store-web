/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className='layout'>
            {children}
        </div>
    )
};

export default Layout;