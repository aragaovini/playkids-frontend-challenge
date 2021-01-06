<template>
  <div>
    <h2>Choose your {{ itemsType }}</h2>

    <c-items-picker
      :list="list"
      @onItemChosen="item => handleChosenItem(item)"
    />

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
    ...mapState('order', ['newOrder']),
    itemsType() {
      return this.category === 'food' ? 'foods' : 'drinks';
    },
    list() {
      return this.category === 'food' ? this.foodList : [];
    }
  },

  data: () => ({
    category: ''
  }),

  created() {
    const { category } = this.$attrs;
    this.category = category;

    this.$store.dispatch('restaurantMenu/get');
  },

  methods: {
    handleChosenItem(item) {
      this.$store.commit('order/setItem', item);

      const items = [...this.list];
      items.map(menuItem => {
        if (menuItem.id === item.id) {
          menuItem.selected = true;
        }
      });
    },

    next() {}
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
