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
      <section v-scroll-reveal.reset>
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
      </section>
      <section v-scroll-reveal.reset>
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
      </section>
      <section v-scroll-reveal.reset>
      <row>
        <column sm="4" xsOffset="1">
           <h2>Sykdom</h2>
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
      </section>
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

  </div>
</template>

<script>
/* eslint-disable */
import ImageComponent from "./ImageComponent.vue";
import Selector from "./Selector.vue";
export default {
  name: "Home",
  data() {
    return {
      siteTitle: "Lederhuset",
      lead: `Lederhuset er en portal for ledere og arbeidsgivere
        med praktiske verktøy og juridisk veiledning samlet på et sted.`
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
