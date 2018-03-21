<template>
        <container hero=true class="lh-hero">
            <row>
                <column>
                    <h1>{{data.siteTitle}}</h1>
                    <p>{{data.lead}}</p>

                <ol>
                  <li>Før du ansetter midlertidig</li>
                  <li>God oppfølging</li>
                  <li>Tips for å lykkes</li>
                  <li>Last ned maler om «ferie»</li>
                </ol>
                </column>
            </row>
          </container>
</template>

<script>
/* eslint-disable */
import data from "@/assets/data/data.json";
export default {
  name: "ThemeHero",
  data() {
    return {
      data
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
