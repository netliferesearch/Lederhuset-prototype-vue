<template>
  <div>
    <ThemeHero />
    <ThemeNav />
    <div id="theme-content">
    <ThemeContent />
    </div>

    <ThemeDownload />
    <ThemeRelated />


</div>
</template>

<script>
/* eslint-disable */
import data from "@/assets/data/data.json";
import ThemeContent from "./ThemeContent.vue";
import ThemeNav from "./ThemeNav.vue";
import ThemeHero from "./ThemeHero.vue";
import ThemeDownload from "./ThemeDownload.vue";
import ThemeRelated from "./ThemeRelated.vue";
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
    ThemeNav,
    ThemeHero,
    ThemeDownload,
    ThemeRelated
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
