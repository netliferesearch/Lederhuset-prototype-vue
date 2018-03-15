<template>
<div>

    <nav>
      <div class="item">
        <router-link to="/">{{ sitetitle }}</router-link>
      </div>

      <div v-on:click="show = !show">
        <div class="item">
          <div class="lh-controller">
            {{ MenuSymbol }}
          </div>
        </div>
      </div>

    </nav>

  <transition name="fade">
    <div v-if="show">
      <div class="lh-menu">
          <ul>
            <li><router-link to="/innlogget">Innlogget forside</router-link></li>
            <li><router-link to="/ikke-innlogget">Ikke innlogget forside</router-link></li>
            <li><router-link to="/tema-side">Tema side</router-link></li>
          </ul>
          <ais-index
          app-id="latency"
          api-key="3d9875e51fbd20c7754e65422f7ce5e1"
          index-name="bestbuy"
        >
          <ais-search-box></ais-search-box>
              <ais-results inline-template>
                <table>
                  <tbody>
                    <tr v-for="result in results" :key="result.objectID">
                      <td>{{ result.name }}</td>
                      <td>{{ result.description }}</td>
                    </tr>
                  </tbody>
                </table>
              </ais-results>
        </ais-index>
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