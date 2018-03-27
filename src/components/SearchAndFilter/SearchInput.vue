<template>
  <div class="lh-search-wrapper">
    <input ref="searchInput" type="text" :value="value" @input="updateInput"/>
  </div>
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
        "Søk etter ledelse ...",
        "Søk etter ferie ...",
        "Søk etter ansettelse ...",
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
  font-family: var(--Serif);
  caret-color: var(--color-secondary);
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  border: 1px solid;
  width: 100%;
  padding: 10px;
  border: 0;
  background-color: transparent;
  height: 50px;
  font-size: calc(var(--h1-font-size) * 1);
  line-height: var(--h1-line-height);
  @media screen and (min-width: 768px) {
    font-size: calc(var(--h1-font-size) * 3);
    height: 150px;
    &::placeholder {
      color: #ccc;
    }
  }
}

.lh-search-wrapper {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 24px 0;
}
</style>
