<template>
        <container :hero="true" class="lh-hero">
            <row>

                <column>
                    <h1 class="lh-text-center">Spørsmål?</h1>
                </column>

                <column sm="6">
                    <ImageComponent :url="require('../assets/images/billgates.jpg')"/>
                </column>
                <column sm="5" smOffset="1">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iusto dolorem consequatur sint qui facere at reprehenderit
                        laudantium, consequuntur similique, impedit tempora velit
                        unde officiis ad vero dicta facilis fugiat provident.
                      </p>
                      <ul class="lh-list">
                          <li>Navn Etternavn</li>
                          <li>mail@mail.no</li>
                          <li>+47 924 16 812</li>
                      </ul>
                </column>
            </row>
          </container>
</template>

<script>
/* eslint-disable */
import data from "@/assets/data/data.json";
import ImageComponent from "./ImageComponent.vue";
export default {
  name: "ThemeContactUs",
  data() {
    return {
      data
    };
  },
  components: {
    ImageComponent
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
