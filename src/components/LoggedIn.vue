<template>
  <div class="hello">
    <h1>{{ siteTitle }}</h1>
    <IndexMeny />


  </div>
</template>

<script>
/* eslint-disable */
import IndexMeny from "./IndexMeny.vue";

export default {
  name: "LoggedIn",
  data() {
    return {
      siteTitle: "Her er vi innlogga"
    };
  },
  components: {
    IndexMeny
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
