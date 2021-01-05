<template>
  <button @click="$emit('click')" v-bind="$attrs">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'CButton'
};
</script>
