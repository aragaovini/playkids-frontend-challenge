<template>
  <div>
    <h2>Payment</h2>

    <c-input label="Name" v-model="payment.name" />
    <c-input
      label="Card number"
      v-mask="['#### #### #### ####']"
      v-model="payment.cardNumber"
    />
    <c-input
      label="Valid date"
      v-mask="['##/##']"
      placeholder="mm/aa"
      v-model="payment.validDate"
    />
    <c-input label="CVV" v-mask="['####']" v-model="payment.cvv" />

    <c-button @click="back">Back</c-button>
    <c-button @click="order">Order</c-button>
  </div>
</template>

<script>
import CInput from '@/components/atoms/c-input/CInput';
import CButton from '@/components/atoms/c-button/CButton';
import { mapState } from 'vuex';

export default {
  name: 'Payment',

  components: {
    CInput,
    CButton
  },

  computed: {
    ...mapState('order', ['newOrder'])
  },

  data: () => ({
    payment: {
      name: '',
      cardNumber: '',
      validDate: '',
      cvv: ''
    }
  }),

  created() {
    if (!this.newOrder.customerIdentification) {
      this.$router.push('/order/customer');
      return;
    }
  },

  methods: {
    order() {
      const { payment } = this;
      this.$store.commit('order/save', {
        payment,
        createdAt: new Date().toLocaleString(),
        id: this.$uuid.v1()
      });
      this.$store.commit('restaurantMenu/setItems', []);
      this.$router.push('/orders');
    },
    back() {
      this.$router.push('/order/drink');
    }
  }
};
</script>
