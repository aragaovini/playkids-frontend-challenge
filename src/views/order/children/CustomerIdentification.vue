<template>
  <div>
    <c-input label="Name" v-model="customerIdentification" />

    <div class="actions-container">
      <c-button @click="next">next</c-button>
    </div>
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

  created() {
    this.$store.commit('order/resetCustomer');
    this.$store.commit('order/setCurrentStep', 'Customer Identification');
  },

  methods: {
    next() {
      const { customerIdentification } = this;
      this.$store.commit('order/setName', customerIdentification);

      this.$router.push('/order/food');
    }
  }
};
</script>

<style scoped>
.actions-container {
  display: flex;
  justify-content: flex-end;
}
</style>
