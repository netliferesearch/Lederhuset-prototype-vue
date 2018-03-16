<template>
  <div class="lh-collapse">

    <v-collapse-wrapper>
        <div class="lh-collapse__header" v-collapse-toggle>
            <affix
            relative-element-selector="#collapse-content-1"
            style="width: 100%"
            :offset="{ top: 140, bottom: -80 }"
            >
            <h2>Før du ansetter</h2>
            </affix>
        </div>
        <div class="my-content" v-collapse-content>
            <section id="collapse-content-1">
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
            </section>
        </div>
    </v-collapse-wrapper>

    <v-collapse-wrapper>

        <div class="lh-collapse__header" v-collapse-toggle>
            <affix
            relative-element-selector="#collapse-content-2"
            style="width: 100%"
            :offset="{ top: 140, bottom: -80 }"
            >
            <h2>Oppfølging av midlertidige ansatte</h2>
            </affix>
        </div>

        <div class="lh-collapse__content" v-collapse-content>
            <section id="collapse-content-2">
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
            </section>
        </div>
    </v-collapse-wrapper>

    <v-collapse-wrapper>
        <div class="lh-collapse__header" v-collapse-toggle>
            <affix
            relative-element-selector="#collapse-content-3"
            style="width: 100%"
            :offset="{ top: 140, bottom: -80 }"
            >
            <h2>Tips for å lykkes</h2>
            </affix>
        </div>
        <div class="my-content" v-collapse-content>
            <section id="collapse-content-3">
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
            </section>
        </div>
    </v-collapse-wrapper>

    <v-collapse-wrapper>
        <div class="lh-collapse__header" v-collapse-toggle>
            <affix
            relative-element-selector="#collapse-content-4"
            style="width: 100%"
            :offset="{ top: 140, bottom: -80 }"
            >
            <h2>Maler</h2>
            </affix>
        </div>
        <div class="my-content" v-collapse-content>
            <section id="collapse-content-4">
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
                <p> {{ ExampleParagraph }} </p>
            </section>
        </div>
    </v-collapse-wrapper>

    <div class="spacetest"></div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "IndexMeny",
  data() {
    return {
      scrollAffix: true,
      enabled: false,
      relativeElementSelector: false,
      ExampleParagraph: `Living a fully ethical life gender rights,
                        parse ideate rubric incubator, strategize engaging;
                        data correlation collaborative cities empower communities
                        co-create justice. Compelling circular, storytelling contextualize,
                        and impact investing the support impact grit program areas.
                        A social entrepreneurship capacity building; scalable segmentation B-corp.
                        Vibrant overcome injustice thought leadership grit overcome injustice,
                        low-hanging fruit strengthening infrastructure peaceful agile granular. `
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.v-collapse-content-end {
  -webkit-transition: max-height 0.3s ease-in;
  transition: max-height 0.3s ease-in;
  min-height: 500px;
  max-height: 100%;
}
.spacetest {
  width: 100%;
  height: 4000px;
  background: gray;
}
.vue-affix {
  width: 100%;
}
.affix-top {
}
.affix {
  background: green;
  top: 0px !important;
}
.affix-bottom {
}
</style>
