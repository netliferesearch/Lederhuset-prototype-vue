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

<style>
:root {
  --primary-color: blue;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
