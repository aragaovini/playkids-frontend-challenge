<template>
  <div :class="['card', { clickable }]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CCard',

  props: {
    clickable: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
.card {
  background-color: #fff;
  padding: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 1px 1px 3px #ccc;
  &.clickable {
    cursor: pointer;
  }
}
</style>
