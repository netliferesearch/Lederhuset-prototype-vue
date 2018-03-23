<template>
  <div class="hello">
    <h1>{{ siteTitle }}</h1>
    <SearchAndFilter />

  </div>
</template>

<script>
/* eslint-disable */
import SearchAndFilter from "./SearchAndFilter.vue";

export default {
  name: "LoggedIn",
  data() {
    return {
      siteTitle: "Hva kan vi hjelpe deg med?"
    };
  },
  components: {
    SearchAndFilter
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
