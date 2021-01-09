<template>
  <div :class="['input', { 'invalid-input': v && v.$error && v.$dirty }]">
    <label class="input__label">{{ label }}</label>
    <input class="input__field" v-bind="$attrs" v-model="model" />
    <div v-if="v && v.$error && v.$dirty" class="input__errors">
      <p>
        {{ errorText }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CInput',

  props: {
    value: {
      type: [String, Number],
      default: ''
    },

    label: {
      type: String,
      default: ''
    },

    /*
     ** Vuelidate instance
     */
    v: {
      type: Object,
      default: () => null
    }
  },

  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        if (this.v) this.v.$touch();
        this.$emit('input', value);
      }
    },
    errorText() {
      if (!this.v) return;

      const hasRequiredValidation = Object.keys(this.v.$params).includes(
        'required'
      );

      const hasMinLengthValidation = Object.keys(this.v.$params).includes(
        'minLength'
      );

      const hasCardDateValidation = Object.keys(this.v.$params).includes(
        'isCardDateValid'
      );

      if (hasRequiredValidation && !this.v.required) return 'Field is required';

      if (hasMinLengthValidation && !this.v.minLength)
        return 'Field size is incorrect';

      if (hasCardDateValidation && !this.v.isCardDateValid)
        return 'Card valid date is incorrect';

      return '';
    }
  }
};
</script>

<style scoped lang="scss">
@use '../../../assets/styles/colors' as *;
@use '../../../assets/styles/sizes' as *;

.input {
  margin-bottom: $size-lg;
  display: flex;
  flex-flow: column;
  text-align: left;
  position: relative;

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

  &.invalid-input {
    .input__label {
      color: $red;
    }
    .input__field {
      border-color: $red;
    }
  }

  .input__errors {
    color: $red;
    font-size: 14px;
    position: absolute;
    top: 40px;
  }
}
</style>
