<template>
  <div>
    <h2>Choose your {{ itemsType }}</h2>

    <c-items-picker
      :list="list"
      @onItemChosen="item => handleChosenItem(item)"
    />

    <c-button v-if="!isFoodStep" @click="back">Back</c-button>
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
    ...mapGetters('restaurantMenu', ['foodList', 'drinkList']),
    ...mapState('order', ['newOrder']),
    itemsType() {
      return this.isFoodStep ? 'foods' : 'drinks';
    },
    list() {
      return this.isFoodStep ? this.foodList : this.drinkList;
    }
  },

  data: () => ({
    isFoodStep: true
  }),

  created() {
    if (!this.newOrder.customerIdentification) {
      this.$router.push('/order/customer');
      return;
    }

    if (!this.list.length) this.$store.dispatch('restaurantMenu/get');

    this.isFoodStep = this.$route.fullPath.includes('food');
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
      let nextStep = '';
      if (this.isFoodStep) {
        nextStep = '/order/drink';
      } else {
        if (!this.newOrder.items.length) {
          return;
        }
        nextStep = '/order/payment';
      }
      this.$router.push(nextStep);
    },
    back() {
      this.$router.push('/order/food');
    }
  },

  watch: {
    $route(to) {
      this.isFoodStep = to.fullPath.includes('food');
    }
  }
};
</script>

<style scoped>
.cards-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
