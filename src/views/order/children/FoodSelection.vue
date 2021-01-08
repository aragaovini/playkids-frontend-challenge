<template>
  <div>
    <c-input label="Search your food" v-model="searchTerm" />

    <c-items-picker
      :list="filteredList"
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
import CInput from '@/components/atoms/c-input/CInput';

export default {
  name: 'ItemSelection',

  components: {
    CItemsPicker,
    CButton,
    CInput
  },

  computed: {
    ...mapGetters('restaurantMenu', ['foodList']),
    ...mapState('order', ['newOrder']),
    filteredList() {
      const list = [...this.foodList];
      const orderedList = list.sort((firstItem, nextItem) =>
        firstItem.name.localeCompare(nextItem.name)
      );

      if (!this.searchTerm) return orderedList;

      return orderedList.filter(food => {
        const name = food.name.toLowerCase();
        return name.includes(this.searchTerm.toLowerCase());
      });
    }
  },

  data: () => ({
    searchTerm: ''
  }),

  async created() {
    if (!this.newOrder.customerIdentification) {
      this.$router.push('/order/customer');
      return;
    }

    this.$store.commit('order/setCurrentStep', 'Choose your foods');
    if (!this.foodList.length) {
      this.getMenuList();
    }
  },

  methods: {
    async getMenuList() {
      try {
        this.$store.commit('setAppLoading', true);
        await this.$store.dispatch('restaurantMenu/get');
      } catch (error) {
        this.$store.commit('toggleToast', {
          color: 'error',
          message: error
        });
      } finally {
        this.$store.commit('setAppLoading', false);
      }
    },

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
