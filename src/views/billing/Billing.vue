<template>
  <div>
    <h1>Billing</h1>

    Total amount: {{ totalPrice | currency }}

    <h2 class="subtitle">Foods sold</h2>
    <p v-if="!foodListBilling.length">No registers found</p>
    <c-card class="item-card" v-for="food in foodListBilling" :key="food.id">
      <div>
        <p>{{ food.name }}</p>
        <p>Quantity: {{ food.totalQuantitySold }}</p>
      </div>
      <p>
        <b>{{ food.totalPriceSold | currency }}</b>
      </p>
    </c-card>

    <h2 class="subtitle">Drinks sold</h2>
    <p v-if="!drinkListBilling.length">No registers found</p>
    <c-card class="item-card" v-for="drink in drinkListBilling" :key="drink.id">
      <div>
        <p>{{ drink.name }}</p>
        <p>Quantity: {{ drink.totalQuantitySold }}</p>
      </div>
      <p>
        <b>{{ drink.totalPriceSold | currency }}</b>
      </p>
    </c-card>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import CCard from '@/components/atoms/c-card/CCard';

export default {
  name: 'Billing',

  components: {
    CCard
  },

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
      try {
        this.$store.commit('setAppLoading', true);
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
      } catch {
        this.$store.commit('toggleToast', {
          color: 'error',
          message: 'Fail to get the billing data.'
        });
      } finally {
        this.$store.commit('setAppLoading', false);
      }
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
          (acc, value) => acc + value.price,
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

<style scoped lang="scss">
@use '../../assets/styles/sizes' as *;

.item-card {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: $size-md;
  p {
    margin: 0px 0px 4px;
    text-align: left;
  }
}

.subtitle {
  text-align: left;
  margin-bottom: $size-lg;
}
</style>
