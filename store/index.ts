import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Crear y exportar una función que devuelva la instancia de Vuex Store
export default () => {
  return new Vuex.Store({});
};
