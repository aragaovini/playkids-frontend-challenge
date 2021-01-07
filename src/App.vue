<template>
  <div id="app">
    <nav class="navbar">
      <router-link class="navbar__logo" to="/orders"
        >Delightful Restaurant</router-link
      >
      <div class="navbar__links">
        <router-link to="/billing">Billing</router-link>
        <router-link to="/order/customer">Order</router-link>
      </div>
    </nav>
    <main class="app__main">
      <c-card class="app__main-card">
        <router-view />
      </c-card>
    </main>
  </div>
</template>

<script>
import CCard from '@/components/atoms/c-card/CCard';

export default {
  name: 'App',
  components: {
    CCard
  }
};
</script>

<style scoped lang="scss">
@use './assets/styles/colors' as *;
@use './assets/styles/sizes' as *;

.link {
  color: $white;
  text-decoration: none;
  font-size: $size-md;
}

.app__main {
  display: flex;
  justify-content: center;

  .app__main-card {
    flex: 1;
    max-width: 1100px;
    margin-top: $size-lg;
  }
}

.navbar {
  background-color: $red;
  padding: $size-md;
  display: flex;
  justify-content: space-between;
  color: $white;
  box-shadow: 1px 1px 4px $dark-gray;
  font-weight: 400;

  .navbar__logo {
    transition: all 0.3s;
    @extend .link;
  }

  .navbar__links {
    display: flex;
    gap: $size-md;

    a {
      transition: opacity 0.3s;
      @extend .link;
      &:hover {
        opacity: 0.8;
      }
    }
  }
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
