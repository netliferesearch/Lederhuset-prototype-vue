<template>
  <div class="lh-collapse">
    <collapse :selected="false">
        <div slot="collapse-header">
            <h2>Før du ansetter</h2>
        </div>
        <div slot="collapse-body">
            <h4>Lov om midlertidig ansettelse</h4>
            <p> {{ ExampleParagraph }} </p>
        </div>
    </collapse>
    <collapse :selected="false">
        <div slot="collapse-header">
            <h2>Oppfølging av midlertidige ansatte</h2>
        </div>
        <div slot="collapse-body">
            <h4>Lov om midlertidig ansettelse</h4>
            <p> {{ ExampleParagraph }} </p>
        </div>
    </collapse>
    <collapse :selected="false">
        <div slot="collapse-header">
            <h2>Tips for å lykkes</h2>
        </div>
        <div slot="collapse-body">
            <h4>Lov om midlertidig ansettelse</h4>
            <p> {{ ExampleParagraph }} </p>
        </div>
    </collapse>
    <collapse :selected="false">
        <div slot="collapse-header">
            <h2>Maler</h2>
        </div>
        <div slot="collapse-body">
            <h4>Lov om midlertidig ansettelse</h4>
            <p> {{ ExampleParagraph }} </p>
        </div>
    </collapse>
  </div>
</template>

<script>
/* eslint-disable */
import Collapse from "./Collapse.vue";
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
  },
  components: {
    Collapse
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
</style>
