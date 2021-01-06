<template>
  <div>
    <h2>Payment</h2>

    <c-input label="Name" v-model="name" />
    <c-input
      label="Card number"
      v-mask="['#### #### #### ####']"
      v-model="cardNumber"
    />
    <c-input
      label="Valid date"
      v-mask="['##/##']"
      placeholder="mm/aa"
      v-model="validDate"
    />
    <c-input label="CCV" v-mask="['###']" v-model="ccv" />

    <c-button @click="back">Back</c-button>
    <c-button @click="next">Next</c-button>
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
    name: '',
    cardNumber: '',
    validDate: '',
    ccv: ''
  }),

  created() {
    if (!this.newOrder.customerIdentification) {
      this.$router.push('/order/customer');
      return;
    }
  },

  methods: {
    next() {
      this.$router.push('/orders');
    },
    back() {
      this.$router.push('/order/drink');
    }
  }
};
</script>
