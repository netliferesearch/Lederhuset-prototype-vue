<template>
  <div class="hello">
    <h1>{{ siteTitle }}</h1>
    <h2>{{ lead }}</h2>

  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "HelloWorld",
  data() {
    return {
      siteTitle: "Dette blir bra!",
      lead:
        "Lederhuset er en portal for ledere og arbeidsgivere med praktiske verktøy og juridisk veiledning samlet på et sted."
    };
  },
  beforeCreate: function() {
    document.body.className = "purple";
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  border: 1px solid black;
}
</style>
