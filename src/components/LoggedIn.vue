<template>
  <div>
    <SearchAndFilter :showUnmatched="showUnmatched" />
  </div>
</template>

<script>
/* eslint-disable */
import SearchAndFilter from "./SearchAndFilter.vue";

export default {
  name: "LoggedIn",
  components: {
    SearchAndFilter
  },
  created() {
    if (window.location) {
      if (location.search.includes('version=hideUnmatched')) {
        this.showUnmatched = false
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
