<template>
  <div class="hello">
    <h1>{{data.title}}</h1>
    <p>{{data.ingress}}</p>

  </div>
</template>

<script>
/* eslint-disable */
import data from "@/assets/data/data.json";
export default {
  name: "ThemeSite",
  data() {
    return {
      data
    };
  },
  beforeCreate: function() {
    document.body.className = "dark";
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
