<template>
  <div class="hello">

        <container :hero="true" class="lh-hero">
            <row>
                <column>
                    <h1>{{siteTitle}}</h1>
                    <Selector></Selector>
                </column>
            </row>
        </container>

    <container>
      <row>
        <column sm="4" xsOffset="1">
           <h2>Feriepenger</h2>
        </column>
        <column sm="6">
           <ul>
             <li>En eller annen ting</li>
             <li>En eller annen ting</li>
             <li>En eller annen ting</li>
             <li>En eller annen ting</li>
             <li>En eller annen ting</li>
           </ul>
        </column>
      </row>
      <row>
        <column sm="4" xsOffset="1">
           <h2>Ansettelse</h2>
        </column>
        <column sm="6">
           <ul>
             <li>En eller annen ting</li>
             <li>En eller annen ting</li>
             <li>En eller annen ting</li>
             <li>En eller annen ting</li>
             <li>En eller annen ting</li>
           </ul>
        </column>
      </row>
      <row>
        <column sm="4">
           <ImageComponent :url="require('../assets/images/study.jpg')"/>
        </column>
        <column sm="4">
           <ImageComponent :url="require('../assets/images/person.jpg')"/>
        </column>
        <column sm="4">
           <ImageComponent :url="require('../assets/images/person.jpg')"/>
        </column>
      </row>
    </container>


 <section v-scroll-reveal.reset>
     <p>{{ lead }}</p>
    </section>

    <button @click="show = !show" :aria-expanded="show ? 'true' : 'false'">
    Trykk på meg!
  </button>
  <p v-if="show">Hei, her er jeg!</p>
  <br>
  <br>
  <br>
  <button @click="active = !active" :aria-pressed="active ? 'true' : 'false'">
    Gjør meg større
  </button>
  <div :class="{ red: active }">Nå er jeg større</div>
  </div>
</template>

<script>
/* eslint-disable */
import ImageComponent from "./ImageComponent.vue";
import Selector from "./Selector.vue";
export default {
  props: {
    xs: "12",
    sm: "6"
  },
  name: "Home",
  data() {
    return {
      siteTitle: "Lederhuset",
      lead: `Lederhuset er en portal for ledere og arbeidsgivere
        med praktiske verktøy og juridisk veiledning samlet på et sted.`,
      show: false,
      active: false
    };
  },
  components: {
    ImageComponent,
    Selector
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.red {
  background-color: var(--color-primary);
  width: 300px;
  height: 300px;
  font-size: 30px;
}
</style>
