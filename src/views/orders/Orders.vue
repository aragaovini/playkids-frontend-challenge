<template>
  <div>
    <h1>Orders</h1>

    <c-button @click="goToCustomerIdentification">new order</c-button>
    <c-button @click="goToBilling">billing</c-button>

    <div class="container">
      <c-card v-for="order in orders" :key="order.id"> {{ order }} </c-card>
    </div>
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
    },

    goToBilling() {
      this.$router.push('/billing');
    }
  }
};
</script>
