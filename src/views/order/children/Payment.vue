<template>
  <div>
    <p>
      <b>Total: {{ amount | currency }}</b>
    </p>

    <c-input label="Name" v-model="payment.name" :v="$v.payment.name" />

    <c-input
      label="Card number"
      v-mask="['#### #### #### ####']"
      v-model="payment.cardNumber"
      :v="$v.payment.cardNumber"
    />

    <c-input
      label="Valid date"
      v-mask="['##/##']"
      placeholder="mm/aa"
      v-model="payment.validDate"
      :v="$v.payment.validDate"
    />

    <c-input
      label="CVV"
      v-mask="['####']"
      v-model="payment.cvv"
      :v="$v.payment.cvv"
    />

    <div class="actions-container">
      <c-button @click="back">Back</c-button>
      <c-button @click="order">Order</c-button>
    </div>
  </div>
</template>

<script>
import CInput from '@/components/atoms/c-input/CInput';
import CButton from '@/components/atoms/c-button/CButton';
import { mapState } from 'vuex';
import { required, minLength } from 'vuelidate/lib/validators';
import { isCardDateValid } from '@/validators';

export default {
  name: 'Payment',

  components: {
    CInput,
    CButton
  },

  computed: {
    ...mapState('order', ['newOrder']),
    amount() {
      if (this.newOrder.items.length) {
        return this.newOrder.items.reduce((acc, value) => {
          return acc + value.price;
        }, 0);
      }
      return 0;
    }
  },

  validations: {
    payment: {
      name: { required },
      cardNumber: { required, minLength: minLength(19) },
      validDate: { required, minLength: minLength(5), isCardDateValid },
      cvv: { required, minLength: minLength(3) }
    }
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

    this.$store.commit('order/setCurrentStep', 'Payment');
  },

  methods: {
    order() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$store.commit('toggleToast', {
          color: 'error',
          message: 'Please, review the fields.'
        });
        return;
      }
      const { payment } = this;
      this.$store.commit('order/save', {
        payment,
        createdAt: new Date().toLocaleString(),
        id: this.$uuid.v1(),
        total: this.amount
      });
      this.$store.commit('restaurantMenu/setItems', []);
      this.$router.push('/orders');
      this.$store.commit('toggleToast', {
        color: 'success',
        message: 'Your order has been registered!'
      });
    },
    back() {
      this.$router.push('/order/drink');
    }
  }
};
</script>

<style scoped lang="scss">
@use '../../../assets/styles/sizes' as *;

.actions-container {
  display: flex;
  justify-content: space-between;
  margin-top: $size-md;
}
</style>
