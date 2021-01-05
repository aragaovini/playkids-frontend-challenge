<template>
  <div>
    <h1>Orders</h1>

    <c-button @click="goToCustomerIdentification">new order</c-button>
  </div>
</template>

<script>
import CButton from '@/components/atoms/c-button/CButton';

export default {
  name: 'Home',

  components: {
    CButton
  },

  methods: {
    goToCustomerIdentification() {
      this.$router.push('/order/customer');
    }
  }
};
</script>
