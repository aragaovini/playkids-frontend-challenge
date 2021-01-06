<template>
  <div>
    <label>{{ label }}</label>
    <input v-bind="$attrs" @input="handleInput" />
  </div>
</template>

<script>
export default {
  name: 'CInput',

  props: {
    model: {
      type: [String, Number]
    },
    label: {
      type: String,
      default: ''
    }
  },

  model: {
    prop: 'model',
    event: 'input'
  },

  methods: {
    handleInput(model) {
      this.$emit('input', model.target.value);
    }
  }
};
</script>
