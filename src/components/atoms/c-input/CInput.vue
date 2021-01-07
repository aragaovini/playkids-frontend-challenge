<template>
  <div class="input">
    <label class="input__label">{{ label }}</label>
    <input
      class="input__field"
      v-bind="$attrs"
      v-model="model"
      @input="handleInput"
    />
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

<style scoped lang="scss">
@use '../../../assets/styles/colors' as *;
@use '../../../assets/styles/sizes' as *;

.input {
  margin-bottom: $size-md;
  display: flex;
  flex-flow: column;
  text-align: left;
  .input__label {
    font-size: 14px;
    color: $black;
    font-weight: 500;
    margin-bottom: 2px;
  }

  .input__field {
    border: 1px solid $dark-gray;
    border-radius: 4px;
    padding: $size-sm 4px;
    outline: none;
    &:focus {
      border-color: $black;
      .input__label {
        color: $black;
      }
    }
  }
}
</style>
