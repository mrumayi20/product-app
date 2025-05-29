import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductService } from '../services/ProductService';
import '../styles/ProductDetail.css';

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const subscription = ProductService.getProductById(id).subscribe(setProduct);
    return () => subscription.unsubscribe();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="detail-container">
      <h2>Product Detail</h2>
      <h3>{product.name}</h3>
      <p><strong>Price:</strong> ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};
