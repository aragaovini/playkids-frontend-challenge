<template>
  <div>
    <h1>Customer Identification</h1>

    <c-input label="Name" v-model="customerIdentification" />

    <c-button @click="next">next</c-button>
  </div>
</template>

<script>
import CInput from '@/components/atoms/c-input/CInput';
import CButton from '@/components/atoms/c-button/CButton';

export default {
  name: 'CustomerIdentification',

  components: {
    CInput,
    CButton
  },

  data: () => ({
    customerIdentification: ''
  }),

  methods: {
    next() {
      const { customerIdentification } = this;
      this.$store.commit('orders/create', {
        customerIdentification
      });

      this.$router.push('/');
    }
  }
};
</script>
