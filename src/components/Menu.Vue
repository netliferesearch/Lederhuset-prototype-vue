<template>
  <div>
      <nav>
        <div class="item">
          <router-link to="/">{{ sitetitle }}</router-link>
        </div>

          <div class="item">
                <ul>
                  <li><router-link to="/innlogget">Innlogget forside</router-link></li>
                  <li><router-link to="/ikke-innlogget">Ikke innlogget forside</router-link></li>
                  <li><router-link to="/tema-side">Tema side</router-link></li>
                </ul>
          </div>
      </nav>
  </div>
</template>


<script>
/* eslint-disable */
export default {
  data() {
    return {
      sitetitle: "Lederhuset",
      MenuSymbol: "Meny"
    };
  }
};
</script>


<style lang="scss" scoped>

</style>