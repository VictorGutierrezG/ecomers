import { Product } from '~/domain/models/Product';

export class ProductRepository {
  async fetchProducts(): Promise<Product[]> {
    return await [
      {
        id: '1',
        name: 'Product 1',
        description: 'This is product 1',
        price: 100,
        imageUrl: 'https://via.placeholder.com/150',
      },
      {
        id: '2',
        name: 'Product 2',
        description: 'This is product 2',
        price: 200,
        imageUrl: 'https://via.placeholder.com/150',
      },
      {
        id: '3',
        name: 'Product 3',
        description: 'This is product 3',
        price: 300,
        imageUrl: 'https://via.placeholder.com/150',
      },
    ];
  }
}
