import React from 'react';
import '../styles/ProductCard.css';

export const ProductCard = ({ product, onClick }) => {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p><strong>Price:</strong> ${product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => onClick(product)}>View Details</button>
    </div>
  );
};
