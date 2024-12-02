<template>
  <b-container class="login-container d-flex justify-content-center align-items-center">
    <b-card title="Login" class="w-50">
      <b-form @submit.prevent="handleLogin">
        <b-form-group label="Username" label-for="username">
          <b-form-input
            id="username"
            v-model="username"
            type="text"
            placeholder="Enter your username"
            required
          />
        </b-form-group>

        <b-form-group label="Password" label-for="password">
          <b-form-input
            id="password"
            v-model="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </b-form-group>

        <b-button type="submit" variant="primary" class="w-100">
          Login
        </b-button>
      </b-form>

      <b-alert v-if="error" variant="danger" dismissible>
        {{ error }}
      </b-alert>
    </b-card>
  </b-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getModule } from 'vuex-module-decorators';
import Auth from '~/store/auth';
import store from '~/store'; // Importamos la instancia del store

// Obtenemos el módulo de autenticación
const authModule = getModule(Auth, store);

export default defineComponent({
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      error: null as string | null,
    };
  },
  methods: {
    async handleLogin() {
      try {
        console.log('Login: Intentando iniciar sesión con', this.username);
        await authModule.login({
          username: this.username,
          password: this.password,
        });
        console.log('Login: Autenticación exitosa, redirigiendo...');
        this.$router.push('/products');
      } catch (e) {
        console.error('Login: Error en login:', e);
        this.error = 'Login failed. Please check your credentials.';
      }
    },
  },
});
</script>

<style scoped>
.login-container {
  min-height: 100vh;
}
</style>
