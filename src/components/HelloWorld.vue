<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Dette blir bra!"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1,
h2 {
  font-weight: normal;
}
a {
  color: var(--primary-color);
}
</style>
