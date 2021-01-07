<template>
  <div>
    <c-items-picker
      :list="foodList"
      @onItemChosen="item => handleChosenItem(item)"
    />
    <div class="actions-container">
      <c-button @click="back">Back</c-button>
      <c-button @click="next">Next</c-button>
    </div>
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

    this.$store.commit('order/setCurrentStep', 'Choose your foods');
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

<style scoped lang="scss">
@use '../../../assets/styles/sizes' as *;

.actions-container {
  display: flex;
  justify-content: space-between;
  margin-top: $size-md;
}
</style>
