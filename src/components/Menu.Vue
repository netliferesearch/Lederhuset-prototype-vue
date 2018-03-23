<template>
    <div>

      <div class="lh-menu">
        <div class="item">
          <router-link to="/kontakt-oss">Kontakt oss</router-link>
        </div>

        <div class="item">
          <router-link to="/">{{ sitetitle }}</router-link>
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
                  <row>
                    <div class="modal-exit">X</div>
                    <column>
                      <Selector></Selector>
                    </column>
                  </row>
                  <row>
                    <column sm="4">
                      <div class="modal-header">
                        <h2>Meny</h2>
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
                    </column>
                    <column sm="4">
                    <h2>{{ sitetitle }}</h2>
                    <ul>
                          <li>
                            <router-link to="/kontakt-oss">
                              Kontakt oss
                            </router-link>
                          </li>
                        </ul>
                    </column>
                    <column sm="4">
                    <h2>Kontakt</h2>
                    <p>
                      hei@lederhuset.no <br />
                      22 42 46 42 <br />
                      Stenersgata 8, 0184 Oslo <br />
                      Organisasjonsnummer: <br />
                      916 898 908
                    </p>
                    </column>
                  </row>
              </div>
            </transition>

      </div>
</template>


<script>
/* eslint-disable */
import Selector from "./Selector.vue";
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
  },
  components: {
    Selector
  }
};
</script>


<style lang="scss" scoped>

</style>