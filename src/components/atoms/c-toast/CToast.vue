<template>
  <div class="container">
    <transition-group name="list" class="transition-group" tag="div">
      <div
        v-for="toast in toasts"
        :key="toast.hash"
        :class="['toast', toast.color]"
      >
        <div class="toast__content">
          <div class="toast__message">
            {{ toast.message }}
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { uuid } from 'vue-uuid';

const toastDefaultOptions = {
  message: '',
  duration: 4000
};

export default {
  name: 'CToast',

  data: () => ({
    toasts: []
  }),

  methods: {
    show(options) {
      const hash = uuid.v1();
      const toast = {
        ...toastDefaultOptions,
        ...options,
        hash,
        color: options.color || 'success'
      };

      this.toasts.push(toast);
      if (toast.duration) {
        setTimeout(() => {
          this.close(toast);
        }, toast.duration);
      }
    },

    close(toast) {
      this.toasts = this.toasts.filter(
        toastComponent => toastComponent.hash !== toast.hash
      );
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../../assets/styles/colors';

.container {
  position: fixed;
  bottom: 0;
  left: 32px;
  z-index: 3;
  max-width: 400px;
  min-width: 180px;
  width: calc(100% - 64px);
}

.container .transition-group {
  display: flex;
  flex-direction: column-reverse;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(calc(-100% - 32px));
}

.toast {
  margin-bottom: 32px;
  padding: 16px;
  transition: all 0.3s;
  display: flex;
  border-radius: 4px;
}

.toast__content {
  display: flex;
  flex-direction: column;
  flex: 1;

  margin: 0px 16px;
  justify-content: flex-start;
}

.toast__message {
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  flex: 1;
}

@each $colorName, $colorValue in $toastColors {
  .#{$colorName}.toast {
    background-color: $colorValue;
    color: $white;
  }
}
</style>
