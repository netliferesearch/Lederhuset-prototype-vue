<template>
  <nav>
    <div class="item">
        <router-link to="/">{{ sitetitle }}</router-link>
    </div>
    <div class="item">
        <router-link to="/innlogget">Innlogget forside</router-link>
    </div>
    <div class="item">
        <router-link to="/ikke-innlogget">Ikke innlogget forside</router-link>
    </div>
    <div class="item">
        <router-link to="/tema-side">Tema side</router-link>
    </div>
  </nav>
</template>

<script>
/* eslint-disable */
module.exports = {
  data() {
    return {
      sitetitle: "Lederhuset"
    };
  }
};
</script>

<style lang="scss" scoped>

</style>