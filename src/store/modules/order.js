const order = {
  namespaced: true,

  state: {
    orders: [],
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
    },

    save(state, details) {
      const order = {
        ...state.newOrder,
        ...details
      };
      state.orders.push(order);
      state.newOrder = {
        itemsDeletable: true,
        customerIdentification: '',
        items: []
      };
    }
  }
};

export default order;
