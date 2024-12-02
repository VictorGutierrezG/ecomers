<template>
  <b-container class="mt-5">
    <b-row align-h="center">
      <b-col cols="12" md="6">
        <b-card title="Login" class="text-center">
          <b-form @submit.prevent="handleLogin">
            <b-form-group label="Username" label-for="username">
              <b-form-input
                id="username"
                v-model="username"
                type="text"
                required
                placeholder="Enter your username"
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Password" label-for="password" class="mt-3">
              <b-form-input
                id="password"
                v-model="password"
                type="password"
                required
                placeholder="Enter your password"
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary" class="mt-3 w-100">
              Login
            </b-button>

            <b-alert
              v-if="errorMessage"
              variant="danger"
              show
              class="mt-3"
            >
              {{ errorMessage }}
            </b-alert>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    ...mapActions('auth', {
      login: 'login'
    }),
    async handleLogin() {
      try {
        await this.login({ username: this.username, password: this.password });
        this.$router.push('/products');
      } catch (error) {
        this.errorMessage = 'Invalid username or password. Please try again.';
      }
    }
  }
});
</script>

<style scoped>
.container {
  margin-top: 50px;
}
.card {
  border: 1px solid #ccc;
}
</style>
