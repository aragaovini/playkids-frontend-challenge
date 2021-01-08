<template>
  <div>
    <c-input
      label="Name"
      :v="$v.customerIdentification"
      v-model="customerIdentification"
    />

    <div class="actions-container">
      <c-button @click="next">next</c-button>
    </div>
  </div>
</template>

<script>
import CInput from '@/components/atoms/c-input/CInput';
import CButton from '@/components/atoms/c-button/CButton';
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'CustomerIdentification',

  components: {
    CInput,
    CButton
  },

  validations: {
    customerIdentification: {
      required
    }
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
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.$store.commit('toggleToast', {
          color: 'error',
          message: 'Please, insert your name.'
        });
        return;
      }
      this.$store.commit(
        'order/setName',
        this.$v.customerIdentification.$model
      );

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
