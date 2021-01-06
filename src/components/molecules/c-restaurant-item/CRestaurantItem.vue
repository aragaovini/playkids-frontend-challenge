<template>
  <c-card @click.native="handleClick" clickable :class="{ selected }">
    <p>{{ item.name }}</p>
    <p>{{ item.description }}</p>
    <p v-if="item.quantity">Quantity: {{ item.quantity }}</p>
    <p>{{ item.price | currency }}</p>
  </c-card>
</template>

<script>
import CCard from '@/components/atoms/c-card/CCard';

export default {
  name: 'CRestaurantItem',

  components: {
    CCard
  },

  props: {
    item: {
      type: Object,
      required: true,
      default: () => {}
    },

    selected: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleClick() {
      this.$emit('click', this.item);
    }
  }
};
</script>

<style scoped>
.selected {
  border: 2px solid rgb(226, 71, 71);
}
</style>
