<template>
  <div class="spinner-background">
    <spinner class="spinner" />
  </div>
</template>

<script>
import spinner from '@/assets/img/spinner.svg';

export default {
  name: 'CLoading',

  components: {
    spinner
  }
};
</script>

<style scoped>
.spinner-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(48, 48, 48, 0.3);
}

.spinner {
  height: 100%;
}
</style>
