/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import initialState from '@mocks/initialState';
import Products from '@components/Products';

const Home = () => {
    return  (
        <Products products={initialState.products} />
    )
};

export default Home;