<template>
  <div>
    <h1>Billing</h1>

    Total amount: {{ totalPrice | currency }}

    <h2>Foods sold</h2>
    <p v-if="!foodListBilling.length">No registers found</p>
    <div v-for="food in foodListBilling" :key="food.id">
      <p>{{ food.name }}</p>
      <p>{{ food.totalQuantitySold }}</p>
      <p>{{ food.totalPriceSold | currency }}</p>
    </div>

    <h2>Drinks sold</h2>
    <p v-if="!drinkListBilling.length">No registers found</p>
    <div v-for="drink in drinkListBilling" :key="drink.id">
      <p>{{ drink.name }}</p>
      <p>{{ drink.totalQuantitySold }}</p>
      <p>{{ drink.totalPriceSold | currency }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Billing',

  computed: {
    ...mapState('order', ['orders']),
    ...mapGetters('restaurantMenu', ['foodList', 'drinkList'])
  },

  data: () => ({
    foodListBilling: [],
    drinkListBilling: [],
    totalPrice: 0
  }),

  created() {
    if (this.orders && this.orders.length) {
      this.initBilling();
    }
  },

  methods: {
    async initBilling() {
      await this.$store.dispatch('restaurantMenu/get');
      const {
        sortedSoldItems: foodList,
        totalSold: totalPriceSoldFood
      } = this.calculateValues(this.foodList);

      this.foodListBilling = foodList;

      const {
        sortedSoldItems: drinkList,
        totalSold: totalPriceSoldDrink
      } = this.calculateValues(this.drinkList);

      this.drinkListBilling = drinkList;

      this.totalPrice = totalPriceSoldFood + totalPriceSoldDrink;
    },

    calculateValues(list) {
      const soldItems = this.getSoldItems(list);

      const sortedSoldItems = soldItems.sort(
        (firstItem, nextItem) =>
          nextItem.totalQuantitySold - firstItem.totalQuantitySold
      );

      const totalSold = sortedSoldItems.reduce(
        (acc, value) => acc + value.totalPriceSold,
        0
      );

      return {
        sortedSoldItems,
        totalSold
      };
    },
    getSoldItems(list) {
      return list.map(menuItem => {
        let itemFromOrders = [];
        this.orders.forEach(order => {
          const itemFound = order.items.find(item => item.id === menuItem.id);
          if (itemFound) itemFromOrders.push(itemFound);
        });

        const totalPriceSold = itemFromOrders.reduce(
          (acc, value) => acc + value.price * (value.quantity || 0),
          0
        );

        const totalQuantitySold = itemFromOrders.reduce(
          (acc, value) => acc + (value.quantity || 0),
          0
        );
        return {
          ...menuItem,
          totalPriceSold,
          totalQuantitySold
        };
      });
    }
  }
};
</script>
