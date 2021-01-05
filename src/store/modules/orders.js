const orders = {
  namespaced: true,
  state: {
    newOrder: {
      customerIdentification: ''
    }
  },
  mutations: {
    create(state, order) {
      state.newOrder = {
        ...state.newOrder,
        ...order
      };
    }
  }
};

export default orders;
