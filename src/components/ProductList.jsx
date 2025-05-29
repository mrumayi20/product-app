import React, { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import { ProductService } from '../services/ProductService';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductList.css';

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const subscription = ProductService.getProducts().subscribe(setProducts);
    return () => subscription.unsubscribe();
  }, []);

  const handleCardClick = (product) => {
    navigate(`/products/${product.id}`);
    console.log(product)
  };

  return (
    <div>
      <h2>Product List</h2>
      <div className="product-list-container">
        {products.map(product => (
        <ProductCard key={product.id} product={product} onClick={handleCardClick} />
      ))}
      </div>
    </div>
  );
};
