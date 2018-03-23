<template>
        <container :hero="true" class="lh-hero">
            <row>
                <column sm="5" smOffset="1">
                    <ImageComponent :url="require('../assets/images/study.jpg')"/>
                </column>
                <column sm="6">
                    <h1>Les videre</h1>
                </column>
                  <row>
                      <column>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iusto dolorem consequatur sint qui facere at reprehenderit
                            laudantium, consequuntur similique, impedit tempora velit
                            unde officiis ad vero dicta facilis fugiat provident.
                          </p>
                      </column>
                  </row>
            </row>
          </container>
</template>

<script>
/* eslint-disable */
import data from "@/assets/data/data.json";
import ImageComponent from "./ImageComponent.vue";
export default {
  name: "ThemeRelated",
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

<style lang="scss" scoped>

</style>
