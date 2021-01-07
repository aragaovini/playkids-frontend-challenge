<template>
  <transition name="modal">
    <div v-if="show" class="modal">
      <div @click="cancel" class="modal__background"></div>
      <div class="modal__body">
        <close-icon class="modal__close-icon" @click="cancel" />
        <h1>{{ item.name }}</h1>
        <p>{{ item.description }}</p>

        <p>Price: {{ price | currency }}</p>

        <c-input
          autofocus
          min="1"
          label="Quantity"
          v-model="quantity"
          type="number"
        />

        <c-button @click="confirm" :disabled="!quantity">Confirm</c-button>
      </div>
    </div>
  </transition>
</template>

<script>
import CButton from '@/components/atoms/c-button/CButton';
import CInput from '@/components/atoms/c-input/CInput';
import CloseIcon from 'vue-material-design-icons/Close.vue';

export default {
  name: 'CRestaurantItemCheckout',

  components: {
    CButton,
    CInput,
    CloseIcon
  },

  computed: {
    price() {
      return this.item.price * this.quantity;
    }
  },

  data: () => ({
    quantity: 1
  }),

  props: {
    item: {
      type: Object,
      default: () => {}
    },

    show: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    confirm() {
      const { item, quantity, price } = this;
      this.$emit('onItemConfirm', {
        ...item,
        quantity,
        price
      });
      this.quantity = 1;
    },
    cancel() {
      this.$emit('onCancel');
    }
  }
};
</script>

<style scoped lang="scss">
.modal {
  transition: opacity 0.3s;
}

.modal__body {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100%;
  max-height: 300px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.modal__close-icon {
  position: absolute;
  top: 4px;
  right: 4px;
  :hover {
    cursor: pointer;
  }
}

.modal__background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(48, 48, 48, 0.3);
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}
</style>
