<template>
  <div id="app">
    <Menu />
    <!--
      Referance to image-link
      <img src="./assets/logo.png">
    -->
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
