import getMenu from '@/services/restaurant-menu.js';

const restaurantMenu = {
  namespaced: true,
  state: {
    items: []
  },

  getters: {
    foodList: state => state.items.filter(item => item.category === 'food'),
    drinkList: state => state.items.filter(item => item.category === 'drink')
  },

  mutations: {
    setItems(state, menu) {
      state.items = menu.data;
    },

    setItemSelected(state, { itemId, selected }) {
      state.items = state.items.map(menuItem => {
        if (menuItem.id === itemId) {
          return {
            ...menuItem,
            selected
          };
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
