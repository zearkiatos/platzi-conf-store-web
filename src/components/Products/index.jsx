/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
import React from 'react';
import Product from '@components/Product';
import '@styles/products.css';

const Products = ({ products }) => {
    const renderProducts = products.map(product => (
        <Product key={product.id} product={product} />
    ));
    return (
        <div className="products">
            <div className="products-items">
                {renderProducts}
            </div>
        </div>
    )
};

export default Products;