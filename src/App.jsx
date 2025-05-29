import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProductList } from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default App;
