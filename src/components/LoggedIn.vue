<template>
  <div>
    <SearchAndFilterFuse v-if="version === 'fuse'" />
    <SearchAndFilter v-else :showUnmatched="version !== 'hideUnmatched'" />
  </div>
</template>

<script>
/* eslint-disable */
import SearchAndFilter from "./SearchAndFilter.vue";
import SearchAndFilterFuse from "./SearchAndFilterFuse.vue";
import queryString from "query-string";

export default {
  name: "LoggedIn",
  components: {
    SearchAndFilter,
    SearchAndFilterFuse
  },
  data() {
    return {
      version: ''
    }
  },
  created() {
    if (window.location) {
      const { version = ''} = queryString.parse(location.search)
      this.version = version
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
