const order = {
  namespaced: true,

  state: {
    newOrder: {
      customerIdentification: '',
      items: []
    }
  },

  mutations: {
    setName(state, name) {
      state.newOrder.customerIdentification = name;
    },

    setItem(state, item) {
      state.newOrder.items.push(item);
    },

    removeItem(state, item) {
      state.newOrder.items = state.newOrder.items.filter(
        menuItem => menuItem.id !== item.id
      );
    }
  }
};

export default order;
