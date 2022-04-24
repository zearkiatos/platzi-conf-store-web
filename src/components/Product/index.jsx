/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import config from '@config';

const Product = ({ key, product, handleAddToCart }) => {
  return (
    <div key={key} className="products-item">
      <img src={`${config.PLATZI_CONF_STORE.API}/${product.imagePath}`} alt={product.title} />
      <section className="products-item-info">
        <h2>{product.title}</h2>
        <span>$ {product.price}</span>
        <p>{product.description}</p>
      </section>
      <button type="button" onClick={handleAddToCart(product)}>
        Buy
      </button>
    </div>
  );
};

export default Product;
