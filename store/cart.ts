import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { CartProduct } from '~/domain/models/CartProduct';

@Module({ name: 'cart' })
export default class CartModule extends VuexModule {
  cart: CartProduct[] = [];

  @Mutation
  addToCart(product: CartProduct) {
    this.cart.push(product);
  }

  @Mutation
  removeFromCart(productId: string) {
    this.cart = this.cart.filter(product => product.id !== productId);
  }

  @Mutation
  updateCartProduct(updatedProduct: CartProduct) {
    const index = this.cart.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
      this.cart[index] = updatedProduct;
    }
  }

  @Mutation
  clearCart() {
    this.cart = [];
  }

  @Action
  addProductToCart(product: CartProduct) {
    this.context.commit('addToCart', product);
  }

  @Action
  removeProductFromCart(productId: string) {
    this.context.commit('removeFromCart', productId);
  }

  @Action
  updateProductInCart(updatedProduct: CartProduct) {
    this.context.commit('updateCartProduct', updatedProduct);
  }

  @Action
  clearAllFromCart() {
    this.context.commit('clearCart');
  }
}
