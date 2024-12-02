import Vuex from 'vuex';
import CartModule from './cart';

export default () => {
  return new Vuex.Store({
    modules: {
      cart: CartModule,
    },
  });
};
