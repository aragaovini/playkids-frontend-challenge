import getMenu from '@/services/restaurant-menu.js';

const restaurantMenu = {
  namespaced: true,
  state: {
    items: []
  },

  getters: {
    foodList: state => state.items.filter(item => item.category === 'food')
  },

  mutations: {
    setItems(state, menu) {
      state.items = menu.data;
    },

    updateItem(state, item) {
      state.items = state.items.map(menuItem => {
        if (menuItem.id === item.id) {
          return item;
        }
        return menuItem;
      });
    }
  },

  actions: {
    async get({ commit }) {
      commit('setItems', await getMenu());
    }
  }
};

export default restaurantMenu;
