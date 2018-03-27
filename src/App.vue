<template>
  <div id="app" class="lh-wrapper">
    <Menu />
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */
import Menu from "./components/Menu.vue";

export default {
  name: "App",
  components: {
    Menu
  }
};
</script>

<style lang="scss">
@import "assets/styles/main.scss";
</style>
