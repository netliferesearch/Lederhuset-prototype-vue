<template>
  <div>
    <!-- For testing we have three different search variants -->
    <SearchAndFilterFuse v-if="version === 'fuse'" />
    <SearchAndFilter v-else-if="version === 'hideUnmatched'" :hideUnmatched="'true'" />
    <SearchAndFilter v-else />
  </div>
</template>

<script>
/* eslint-disable */
import SearchAndFilter from "@/components/SearchAndFilter/SearchAndFilter.vue";
import SearchAndFilterFuse from "@/components/SearchAndFilter/SearchAndFilterFuse.vue";
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
