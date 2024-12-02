<template>
  <b-container class="mt-5">
    <b-row>
      <b-col v-for="product in products" :key="product.id" cols="12" md="6" lg="4">
        <b-card :title="product.name" class="mb-4">
          <b-img :src="product.imageUrl" alt="product.name" class="mb-3" fluid></b-img>
          <b-card-text>
            {{ product.description }}
          </b-card-text>
          <b-card-text>
            <strong>Price: {{ product.price }}</strong>
          </b-card-text>
          <b-button @click="addToCart(product)" variant="primary">Add to Cart</b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ProductRepository } from '~/infrastructure/repositories/ProductRepository';
import { Product } from '~/domain/models/Product';

export default defineComponent({
  data() {
    return {
      products: [] as Product[],
    };
  },
  async created() {
    const productRepository = new ProductRepository();
    this.products = await productRepository.fetchProducts();
  },
  methods: {
    async addToCart(product: Product) {
      const cartProduct = { ...product, quantity: 1 };
      await this.$store.dispatch('cart/addToCart', cartProduct);
    },
  },
});
</script>

<style scoped>
.mb-4 {
  margin-bottom: 1.5rem;
}
</style>
