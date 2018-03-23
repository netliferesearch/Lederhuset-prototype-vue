<template>
  <div>
    <ThemeHero />
    <div id="theme-content">
    <ThemeContent />
    </div>

    <ThemeDownload />
    <ThemeRelated />
    <ThemeContactUs />


</div>
</template>

<script>
/* eslint-disable */
import data from "@/assets/data/data.json";
import ThemeContent from "./ThemeContent.vue";
import ThemeHero from "./ThemeHero.vue";
import ThemeDownload from "./ThemeDownload.vue";
import ThemeRelated from "./ThemeRelated.vue";
import ThemeContactUs from "./ThemeContactUs.vue";
export default {
  name: "ThemeSite",
  props: {},
  data() {
    return {
      data
    };
  },
  components: {
    ThemeContent,
    ThemeHero,
    ThemeDownload,
    ThemeRelated,
    ThemeContactUs
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
