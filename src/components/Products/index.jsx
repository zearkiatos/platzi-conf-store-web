/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
import React, { useContext } from 'react';
import Product from '@components/Product';
import AppContext from '@context/AppContext';
import '@styles/products.css';

const Products = () => {
  const { addToCart, products } = useContext(AppContext);
  const handleAddToCart = (product) => () => addToCart(product);
  const renderProducts = products.map(({ attributes }) => (
    <Product
      key={attributes.id}
      product={attributes}
      handleAddToCart={handleAddToCart}
    />
  ));
  return (
    <div className="products">
      <div className="products-items">{renderProducts}</div>
    </div>
  );
};

export default Products;
