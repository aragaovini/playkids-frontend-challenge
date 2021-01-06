const order = {
  namespaced: true,

  state: {
    newOrder: {
      itemsDeletable: true,
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
    },

    setItemsDeletable(state, option) {
      state.newOrder.itemsDeletable = option;
    }
  }
};

export default order;
