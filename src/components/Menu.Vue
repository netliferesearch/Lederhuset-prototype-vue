<template>
    <div>

      <div class="lh-menu">
        <div class="item">
          <router-link to="/">Kontakt oss</router-link>
        </div>

        <div class="item">
          <router-link to="/"><h3>{{ sitetitle }}</h3></router-link>
        </div>

        <div class="item">
            <div class="modal-container">
              <button type="button" class="button-primary" v-on:click="toggle"  v-show="!show">
                Søk/ Meny
              </button>
            </div>
          </div>
       </div>

            <transition name="fade">
              <div class="modal" v-show="show" v-on:click="toggle">
                <div class="modal-message">
                  <div class="modal-header">
                    <h2>Meny</h2>
                  </div>

                  <div class="modal-body">
                    <ul>
                      <li>
                        <router-link to="/innlogget">
                          Innlogget forside
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/ikke-innlogget">
                          Ikke innlogget forside
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/tema-side">
                          Tema side
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </transition>

      </div>
</template>


<script>
/* eslint-disable */
export default {
  data() {
    return {
      sitetitle: "Lederhuset",
      MenuSymbol: "Meny",
      show: false
    };
  },
  methods: {
    toggle: function() {
      this.show = !this.show;
    }
  }
};
</script>


<style lang="scss" scoped>

</style>