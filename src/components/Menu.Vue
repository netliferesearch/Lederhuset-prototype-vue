<template>
<div>
   <div v-on:click="show = !show">
      <nav>
        <div class="item">
            <router-link to="/">{{ sitetitle }}</router-link>
        </div>
        <div class="item">
          <div class="lh-controller">
            {{ MenuSymbol }}
          </div>
        </div>
    </nav>
  </div>
  <transition name="fade">
    <div v-if="show">
      <div class="lh-menu">
          <ul>
            <li><router-link to="/innlogget">Innlogget forside</router-link></li>
            <li><router-link to="/ikke-innlogget">Ikke innlogget forside</router-link></li>
            <li><router-link to="/tema-side">Tema side</router-link></li>
          </ul>
      </div>
    </div>
  </transition>

</div>
</template>

<script>
/* eslint-disable */

module.exports = {
  data() {
    return {
      sitetitle: "Lederhuset",
      MenuSymbol: "Meny",
      show: false
    };
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>