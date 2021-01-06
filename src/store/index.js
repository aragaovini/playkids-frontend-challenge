import Vue from 'vue';
import Vuex from 'vuex';

import order from './modules/order';
import restaurantMenu from './modules/restaurantMenu';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    order,
    restaurantMenu
  }
});
