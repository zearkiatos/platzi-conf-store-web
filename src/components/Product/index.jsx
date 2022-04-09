/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';

const Product = ({ product }) => {
    return (
        <div className="products-item">
            <img src={product.image} alt={product.title} />
            <section className="products-item-info">
                <h2>{product.title}</h2>
                <span>$ {product.price}</span>
                <p>{product.description}</p>
            </section>
            <button type="button">Shop</button>
        </div>
    )
};

export default Product;