import { of } from 'rxjs';
import products from '../data/products.json';

export const ProductService = {
  getProducts: () => {
    return of(products); // Simulating observable
  },
  getProductById: (id) => {
    const product = products.find(p => p.id === parseInt(id));
    return of(product); // Simulating observable
  }
};
