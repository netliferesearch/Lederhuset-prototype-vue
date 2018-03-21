<template>
<div>
    <p>Søk</p>
  <v-select :options="options" label="title">
    <template slot="option" slot-scope="option" >
        <span class="fa" :class="option.icon"></span>
        {{ option.title }}
    </template>
  </v-select>
</div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Selector",
  data() {
    return {
      options: [
        {
          title: "Read the Docs",
          icon: "fa-book",
          url: "https://codeclimate.com/github/sagalbot/vue-select"
        },
        {
          title: "View on GitHub",
          icon: "fa-github",
          url: "https://codeclimate.com/github/sagalbot/vue-select"
        },
        {
          title: "View on NPM",
          icon: "fa-database",
          url: "https://codeclimate.com/github/sagalbot/vue-select"
        },
        {
          title: "View Codepen Examples",
          icon: "fa-pencil",
          url: "https://codeclimate.com/github/sagalbot/vue-select"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
