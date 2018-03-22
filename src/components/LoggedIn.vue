<template>
  <div class="hello">
    <h1>{{ siteTitle }}</h1>
    <Selector></Selector>
    <IndexMeny />
  </div>
</template>

<script>
/* eslint-disable */
import IndexMeny from "./IndexMeny.vue";
import Selector from "./Selector.vue";

export default {
  name: "LoggedIn",
  data() {
    return {
      siteTitle: "Hva kan vi hjelpe deg med?"
    };
  },
  components: {
    IndexMeny,
    Selector
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
