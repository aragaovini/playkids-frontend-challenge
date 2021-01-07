<template>
  <div id="app">
    <c-navbar
      :sidebarActive="sidebarActive"
      @onLinkClick="sidebarActive = false"
      @onMenuIconClick="handleMenuClick"
    />

    <transition name="fade">
      <div
        @click="sidebarActive = false"
        v-if="sidebarActive"
        class="background"
      ></div>
    </transition>

    <main class="app__main">
      <c-card class="app__main-card">
        <router-view />
      </c-card>
    </main>
  </div>
</template>

<script>
import CCard from '@/components/atoms/c-card/CCard';
import CNavbar from '@/components/molecules/c-navbar/CNavbar';

export default {
  name: 'App',

  components: {
    CCard,
    CNavbar
  },

  data: () => ({
    sidebarActive: false
  }),

  methods: {
    handleMenuClick() {
      this.sidebarActive = !this.sidebarActive;
    }
  }
};
</script>

<style scoped lang="scss">
@use './assets/styles/colors' as *;
@use './assets/styles/sizes' as *;
@use './assets/styles/screen-sizes' as *;

.app__main {
  display: flex;
  justify-content: center;

  .app__main-card {
    flex: 1;
    max-width: 1100px;
    margin: $size-lg;
  }
}

.background {
  display: block;
  z-index: 1;
  background-color: $gray;
  opacity: 0.6;
  transition: opacity 0.3s;
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  @media screen and (min-width: $laptop-min) {
    display: none;
  }
}

.fade-enter {
  opacity: 0;
}

.fade-leave-active {
  opacity: 0;
}
</style>

<style lang="scss">
@use './assets/styles/colors' as *;

body {
  margin: 0;
  background-color: $gray;
}

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black;
}
</style>
