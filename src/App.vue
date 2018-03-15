<template>
  <div id="app">
    <h1>Lederhuset</h1>
    <!--
      Referance to image-link
      <img src="./assets/logo.png">
    -->
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "App"
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
