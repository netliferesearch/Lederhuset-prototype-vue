<template>
  <input ref="searchInput" type="text" :value="value" @input="updateInput"/>
</template>

<script>
/* eslint-disable */

import findIndex from 'lodash/findIndex'
import searchData from './searchData'
import Typed from 'typed.js';

export default {
  name: "SearchInput",
  props: ['value'],
  mounted() {
    var options = {
      strings: [
        "Søk etter ledelse",
        "Søk etter ferie",
        "Søk etter ansettelse",
      ],
      typeSpeed: 40,
      loop: true,
      attr: 'placeholder',
    }
    this.typed = new Typed(this.$refs.searchInput, options);
  },
  beforeDestroy() {
    // cleanup typed instance.
    this.typed.destroy()
  },
  methods: {
    updateInput(e) {
      this.$emit('input', e.target.value)
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
input {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  border: 1px solid;
  width: 100%;
  height: 50px;
  padding: 10px;
}
</style>
