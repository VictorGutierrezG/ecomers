import { CartProduct } from '~/domain/models/CartProduct';
import { CartRepository } from '~/infrastructure/repositories/CartRepository';

export class CartUseCase {
  private cartRepository: CartRepository;

  constructor(cartRepository: CartRepository) {
    this.cartRepository = cartRepository;
  }

  async addToCart(product: CartProduct): Promise<void> {
    const currentCart = await this.cartRepository.fetchCart();
    const productIndex = currentCart.findIndex((item) => item.id === product.id);
    
    if (productIndex !== -1) {
      currentCart[productIndex].quantity += 1;
    } else {
      currentCart.push({ ...product, quantity: 1 });
    }

    await this.cartRepository.updateCart(currentCart);
  }

  async removeFromCart(productId: string): Promise<void> {
    const currentCart = await this.cartRepository.fetchCart();
    const updatedCart = currentCart.filter((product) => product.id !== productId);

    await this.cartRepository.updateCart(updatedCart);
  }

  async updateCartProduct(productId: string, quantity: number): Promise<void> {
    const currentCart = await this.cartRepository.fetchCart();
    const productIndex = currentCart.findIndex((item) => item.id === productId);

    if (productIndex !== -1) {
      currentCart[productIndex].quantity = quantity;
    }

    await this.cartRepository.updateCart(currentCart);
  }

  async clearCart(): Promise<void> {
    await this.cartRepository.updateCart([]);
  }
}
