const order = {
  namespaced: true,

  state: {
    orders: [],
    currentStep: '',
    newOrder: {
      itemsDeletable: true,
      customerIdentification: '',
      items: []
    }
  },

  mutations: {
    setCurrentStep(state, step) {
      state.currentStep = step;
    },

    setName(state, name) {
      state.newOrder.customerIdentification = name;
    },

    setItem(state, item) {
      const alreadyOrdered = state.newOrder.items.some(
        menuItem => menuItem.id === item.id
      );

      if (alreadyOrdered) {
        state.newOrder.items = state.newOrder.items.filter(
          menuItem => menuItem.id !== item.id
        );
      }

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
    },

    resetCustomer(state) {
      state.newOrder = {
        ...state.newOrder,
        customerIdentification: ''
      };
    }
  }
};

export default order;
