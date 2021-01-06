<template>
  <div>
    <div class="cards-container">
      <c-restaurant-item
        v-for="item in list"
        :key="item.id"
        :item="item"
        :selected="item.selected"
        @click="item => handleItemClick(item)"
      />
    </div>

    <c-restaurant-item-checkout
      :show="showItemCheckout"
      :item="selectedItem"
      @onCancel="closeItemCheckout"
      @onItemConfirm="item => handleChosenItem(item)"
    />
  </div>
</template>

<script>
import CRestaurantItem from '@/components/molecules/c-restaurant-item/CRestaurantItem';
import CRestaurantItemCheckout from '@/components/molecules/c-restaurant-item-checkout/CRestaurantItemCheckout';

export default {
  name: 'CItemsPicker',

  components: {
    CRestaurantItem,
    CRestaurantItemCheckout
  },

  props: {
    list: {
      type: Array,
      default: () => []
    }
  },

  data: () => ({
    showItemCheckout: false,
    selectedItem: {},
    chosenItems: []
  }),

  methods: {
    handleItemClick(item) {
      this.selectedItem = item;
      this.showItemCheckout = true;
    },

    closeItemCheckout() {
      this.selectedItem = {};
      this.showItemCheckout = false;
    },

    handleChosenItem(item) {
      this.$emit('onItemChosen', item);
      this.closeItemCheckout();
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
