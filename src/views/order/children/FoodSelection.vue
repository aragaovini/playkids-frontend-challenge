<template>
  <div>
    <h2>Choose your foods</h2>

    <c-items-picker
      :list="foodList"
      @onItemChosen="item => handleChosenItem(item)"
    />

    <c-button @click="back">Back</c-button>
    <c-button @click="next">Next</c-button>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import CItemsPicker from '@/components/organisms/c-items-picker/CItemsPicker';
import CButton from '@/components/atoms/c-button/CButton';

export default {
  name: 'ItemSelection',

  components: {
    CItemsPicker,
    CButton
  },

  computed: {
    ...mapGetters('restaurantMenu', ['foodList']),
    ...mapState('order', ['newOrder'])
  },

  created() {
    if (!this.newOrder.customerIdentification) {
      this.$router.push('/order/customer');
      return;
    }

    if (!this.foodList.length) this.$store.dispatch('restaurantMenu/get');
  },

  methods: {
    handleChosenItem(item) {
      this.$store.commit('order/setItem', item);
      this.$store.commit('restaurantMenu/setItemSelected', {
        itemId: item.id,
        selected: true
      });
    },

    next() {
      this.$router.push('/order/drink');
    },
    back() {
      this.$router.push('/order/customer');
    }
  }
};
</script>
