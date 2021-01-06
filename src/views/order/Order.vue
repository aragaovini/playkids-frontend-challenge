<template>
  <div>
    <h1>New Order</h1>
    <div class="container">
      <router-view class="order-view"></router-view>
      <div v-if="newOrder.customerIdentification" class="order-details">
        <h2>Your Order</h2>

        <p>{{ newOrder.customerIdentification }}</p>
        <ul>
          <li v-for="item in newOrder.items" class="list-item" :key="item.id">
            <div>
              <p>{{ item.name }}</p>
              <p>Qt.:{{ item.quantity }}</p>
              <p>{{ item.price | currency }}</p>
            </div>
            <trash-can-icon
              class="list-item__action-icon"
              @click="() => removeItemFromOrder(item)"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TrashCanIcon from 'vue-material-design-icons/TrashCan.vue';

export default {
  name: 'Order',

  components: {
    TrashCanIcon
  },

  computed: {
    ...mapState('order', ['newOrder'])
  },

  methods: {
    removeItemFromOrder(item) {
      this.$store.commit('order/removeItem', item);
      this.$store.commit('restaurantMenu/setItemSelected', {
        itemId: item.id,
        selected: false
      });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  gap: 16px;
  width: 100%;
  flex-wrap: wrap;
}

.order-details {
  flex: auto;
  max-width: 400px;
}

.order-view {
  flex: auto;
}

.list-item {
  display: flex;
  justify-content: space-between;
}

.list-item__action-icon:hover {
  cursor: pointer;
}
</style>
