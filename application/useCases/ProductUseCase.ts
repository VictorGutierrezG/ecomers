import { Product } from '~/domain/models/Product';
import { ProductRepository } from '~/infrastructure/repositories/ProductRepository';

export class ProductUseCase {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  async getProducts(): Promise<Product[]> {
    return await this.productRepository.fetchProducts();
  }
}
