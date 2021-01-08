<template>
  <div class="background">
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
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  height: 100%;
}
</style>
