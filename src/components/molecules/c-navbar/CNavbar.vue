<template>
  <nav class="navbar">
    <router-link class="navbar__logo" to="/orders">
      Delightful Restaurant
    </router-link>

    <div class="navbar__options">
      <menu-icon class="navbar__menu-icon" @click="$emit('onMenuIconClick')" />
      <div
        :class="['navbar__links', { 'navbar__links--active': sidebarActive }]"
      >
        <router-link @click.native="$emit('onLinkClick')" to="/billing"
          >Billing</router-link
        >

        <router-link @click.native="$emit('onLinkClick')" to="/order/customer"
          >Order</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
import MenuIcon from 'vue-material-design-icons/Menu';

export default {
  name: 'CNavbar',

  components: {
    MenuIcon
  },

  props: {
    sidebarActive: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
@use '../../../assets/styles/colors' as *;
@use '../../../assets/styles/sizes' as *;
@use '../../../assets/styles/screen-sizes' as *;

.link {
  color: $white;
  text-decoration: none;
  font-size: $size-md;
}

.navbar {
  position: fixed;
  background-color: $red;
  padding: $size-md 0px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: $white;
  box-shadow: 1px 1px 4px $dark-gray;
  font-weight: 400;
  z-index: 2;

  .navbar__logo {
    margin-left: $size-md;
    line-height: 29px;
    @extend .link;
  }

  .navbar__menu-icon {
    font-size: $size-md;
    margin: 0px $size-md;
    &:hover {
      cursor: pointer;
    }
    @media screen and (min-width: $laptop-min) {
      display: none;
    }
  }

  .navbar__links {
    display: flex;
    gap: $size-md;
    transition: transform 0.3s;
    margin: 0px $size-md;
    a {
      transition: opacity 0.3s;
      @extend .link;
      &:hover {
        opacity: 0.8;
      }
    }

    @media screen and (max-width: $laptop-min) {
      &.navbar__links--active {
        transform: translateX(-160px);
      }
      position: fixed;
      margin: 0px;
      background-color: $white;
      padding: 0px;
      right: 0;
      display: flex;
      flex-flow: column;
      min-width: 160px;
      text-align: left;
      gap: 0px;
      margin-top: $size-md;
      height: 100%;
      right: -160px;
      a {
        padding: $size-md;
        color: $black;
        transition: all 0.3s;
        &:hover {
          transition: all 0.3s;
          padding-left: $size-lg;
          background-color: $gray;
        }
      }
    }
  }
}
</style>
