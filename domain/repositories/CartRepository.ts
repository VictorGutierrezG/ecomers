import { CartProduct } from '../models/CartProduct';

export interface CartRepository {
  addProductToCart(product: CartProduct): Promise<void>;
  removeProductFromCart(productId: string): Promise<void>;
  getCart(): Promise<CartProduct[]>;
  clearCart(): Promise<void>;
}
