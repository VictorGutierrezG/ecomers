// ~/infrastructure/repositories/CartRepository.ts

import { CartProduct } from '~/domain/models/CartProduct';

export class CartRepository {
  async fetchCart(): Promise<CartProduct[]> {
    const cart = await localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }

  async updateCart(cart: CartProduct[]): Promise<void> {
    await localStorage.setItem('cart', JSON.stringify(cart));
  }
}
