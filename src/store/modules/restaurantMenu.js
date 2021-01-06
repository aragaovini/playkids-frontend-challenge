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
      state.items = menu;
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
      const { data } = await getMenu();
      commit('setItems', data);
    }
  }
};

export default restaurantMenu;
