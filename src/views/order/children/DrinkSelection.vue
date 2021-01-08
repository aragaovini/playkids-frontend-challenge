<template>
  <div>
    <c-input label="Search your drink" v-model="searchTerm" />

    <c-items-picker
      :list="filteredList"
      @onItemChosen="item => handleChosenItem(item)"
    />

    <div class="actions-container">
      <c-button @click="back">Back</c-button>
      <c-button @click="next" :disabled="!newOrder.items.length">Next</c-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import CItemsPicker from '@/components/organisms/c-items-picker/CItemsPicker';
import CButton from '@/components/atoms/c-button/CButton';
import CInput from '@/components/atoms/c-input/CInput';

export default {
  name: 'ItemSelection',

  components: {
    CItemsPicker,
    CButton,
    CInput
  },

  computed: {
    ...mapGetters('restaurantMenu', ['drinkList']),
    ...mapState('order', ['newOrder']),

    filteredList() {
      const list = [...this.drinkList];
      const orderedList = list.sort((firstItem, nextItem) =>
        firstItem.name.localeCompare(nextItem.name)
      );

      if (!this.searchTerm) return orderedList;

      return orderedList.filter(drink => {
        const name = drink.name.toLowerCase();
        return name.includes(this.searchTerm.toLowerCase());
      });
    }
  },

  data: () => ({
    searchTerm: ''
  }),

  created() {
    if (!this.newOrder.customerIdentification) {
      this.$router.push('/order/customer');
      return;
    }

    this.$store.commit('order/setCurrentStep', 'Choose your drinks');
    if (!this.drinkList.length) this.$store.dispatch('restaurantMenu/get');
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
      if (!this.newOrder.items.length) {
        return;
      }
      this.$router.push('/order/payment');
    },
    back() {
      this.$router.push('/order/food');
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
