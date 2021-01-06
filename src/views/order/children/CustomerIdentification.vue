<template>
  <div>
    <h2>Customer Identification</h2>

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
      this.$store.commit('order/setName', customerIdentification);

      this.$router.push('/order/food');
    }
  }
};
</script>
