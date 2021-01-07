<template>
  <button class="button" @click="$emit('click')" v-bind="$attrs">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'CButton'
};
</script>

<style scoped lang="scss">
@use '../../../assets/styles/colors' as *;
@use '../../../assets/styles/sizes' as *;

.button {
  background-color: $white;
  border: 1px solid $dark-gray;
  color: $black;
  border-radius: 4px;
  padding: $size-sm $size-md;
  transition: all 0.3s;
  font-weight: 700;
  text-transform: capitalize;
  font-size: 14px;
  &:enabled:hover {
    background-color: $black;
    color: $white;
    cursor: pointer;
  }
  &:disabled {
    color: $dark-gray;
    $border-color: $dark-gray;
  }
}
</style>
