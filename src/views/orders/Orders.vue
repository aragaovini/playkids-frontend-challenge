<template>
  <div>
    <h1>Orders</h1>
    <div class="actions-container">
      <c-button @click="goToCustomerIdentification">new order</c-button>
    </div>

    <c-card class="order-card" v-for="order in orders" :key="order.id">
      <p>
        Customer: <b>{{ order.customerIdentification }}</b>
      </p>
      <p>Products:</p>
      <ul class="order-list">
        <li class="order-list__item" v-for="item in order.items" :key="item.id">
          <div>{{ item.name }}</div>
          <div>{{ item.price | currency }}</div>
        </li>
      </ul>
      <p>
        Date: <b>{{ order.createdAt }}</b>
      </p>
      <p>
        Total: <b>{{ order.total | currency }}</b>
      </p>

      <p>Payment:</p>
      <div class="order__payment">
        <p>
          Card name: <b>{{ order.payment.name }}</b>
        </p>
        <p>
          Card number: <b>{{ order.payment.cardNumber | cardNumber }}</b>
        </p>
      </div>
    </c-card>
  </div>
</template>

<script>
import CButton from '@/components/atoms/c-button/CButton';
import CCard from '@/components/atoms/c-card/CCard';
import { mapState } from 'vuex';

export default {
  name: 'Home',

  components: {
    CButton,
    CCard
  },

  computed: {
    ...mapState('order', ['orders'])
  },

  methods: {
    goToCustomerIdentification() {
      this.$router.push('/order/customer');
    }
  }
};
</script>

<style scoped lang="scss">
@use '../../assets/styles/sizes' as *;

.order-card {
  text-align: left;
  margin-top: $size-md;
}

.actions-container {
  display: flex;
  justify-content: flex-end;
}

.order-list {
  list-style: none;
  padding: 0px $size-sm;

  .order-list__item {
    margin-bottom: $size-md;
    font-weight: 500;
  }
}

.order__payment {
  padding: 0px $size-md;
}
</style>
