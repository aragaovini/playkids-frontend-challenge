<template>
  <div>
    <h1>New Order</h1>
    <div class="container">
      <router-view class="order-view"></router-view>
      <div v-if="newOrder.customerIdentification" class="order-details">
        <h2>Your Order</h2>

        <p>{{ newOrder.customerIdentification }}</p>
        <ul>
          <li v-for="item in newOrder.items" :key="item.id">
            <p>{{ item.name }}</p>
            <p>Qt.:{{ item.quantity }}</p>
            <p>{{ item.price | currency }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Order',

  computed: {
    ...mapState('order', ['newOrder'])
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
}

.order-view {
  flex: auto;
}
</style>
