<template>
  <div>
    <h1>{{ currentStep || 'New Order' }}</h1>
    <div class="container">
      <div v-if="newOrder.customerIdentification" class="order-details">
        <h2>Your Order</h2>

        <p>
          Customer: <b>{{ newOrder.customerIdentification }}</b>
        </p>
        <ul class="order-details__list">
          <li
            v-for="item in newOrder.items"
            class="order-details__item"
            :key="item.id"
          >
            <div>
              <p>
                Item: <b>{{ item.name }}</b>
              </p>
              <p>
                Quantity.: <b>{{ item.quantity }}</b>
              </p>
              <p>
                Price: <b>{{ item.price | currency }}</b>
              </p>
            </div>
            <trash-can-icon
              v-if="newOrder.itemsDeletable"
              class="list-item__action-icon"
              @click="() => removeItemFromOrder(item)"
            />
          </li>
        </ul>
      </div>
      <router-view
        :class="[
          'order-view',
          { 'details-active': newOrder.customerIdentification }
        ]"
      ></router-view>
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
    ...mapState('order', ['newOrder', 'currentStep'])
  },

  methods: {
    removeItemFromOrder(item) {
      this.$store.commit('order/removeItem', item);
      this.$store.commit('restaurantMenu/setItemSelected', {
        itemId: item.id,
        selected: false
      });
    }
  },

  watch: {
    $route(to) {
      const isPaymentStep = to.fullPath.includes('payment');
      this.$store.commit('order/setItemsDeletable', !isPaymentStep);
    }
  }
};
</script>

<style lang="scss" scoped>
@use '../../assets/styles/sizes' as *;

.container {
  display: flex;
  gap: 16px;
  width: 100%;
  flex-wrap: wrap;
  text-align: left;
}

.order-details {
  flex: auto;
  max-width: 350px;
  min-width: 100px;
  .order-details__list {
    padding: 0px;
    p {
      margin: 0px 0px 4px;
    }
  }

  .order-details__item {
    display: flex;
    justify-content: space-between;
    margin-bottom: $size-md;
  }
}

.order-view {
  flex: auto;
  flex: 1;
  min-width: 300px;
}

.list-item__action-icon:hover {
  cursor: pointer;
}
</style>
