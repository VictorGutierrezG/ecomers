<template>
  <b-container class="mt-5">
    <b-row>
      <b-col v-for="product in cartProducts" :key="product.id" cols="12" md="6" lg="4">
        <b-card :title="product.name" class="mb-4">
          <b-img :src="product.imageUrl" alt="product.name" class="mb-3" fluid></b-img>
          <b-card-text>
            {{ product.description }}
          </b-card-text>
          <b-card-text>
            <strong>Price: {{ product.price }}</strong>
          </b-card-text>
          <b-button @click="updateQuantity(product)" variant="primary">Update Quantity</b-button>
          <b-button @click="removeProduct(product.id)" variant="danger">Remove</b-button>
        </b-card>
      </b-col>
    </b-row>

    <b-button @click="clearCart" variant="danger">Clear Cart</b-button>
  </b-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getModule } from 'vuex-module-decorators';
import CartModule from '~/store/cart';
import { CartProduct } from '~/domain/models/CartProduct';

export default defineComponent({
  data() {
    return {
      cartProducts: [] as CartProduct[],
    };
  },
  created() {
    const cartModule = getModule(CartModule, this.$store);
    this.cartProducts = cartModule.cart;
  },
  methods: {
    async updateQuantity(product: CartProduct) {
      const cartModule = getModule(CartModule, this.$store);
      const updatedProduct = {
        ...product,
        quantity: product.quantity,
      };
      await cartModule.updateProductInCart(updatedProduct);
    },
    async removeProduct(id: string) {
      const cartModule = getModule(CartModule, this.$store);
      await cartModule.removeProductFromCart(id);
    },
    async clearCart() {
      const cartModule = getModule(CartModule, this.$store);
      await cartModule.clearAllFromCart();
    },
  },
});
</script>

<style scoped>
.mb-4 {
  margin-bottom: 1.5rem;
}
</style>
