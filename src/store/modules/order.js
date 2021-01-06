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
    }
  }
};

export default order;
