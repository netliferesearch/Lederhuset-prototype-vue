<template>
    <div v-scroll-reveal.reset>
        <img alt="alt teksten" :src="url">
    </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "ImageComponent",
  props: ["url"],
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
