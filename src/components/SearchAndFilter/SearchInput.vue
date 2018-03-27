<template>
  <input type="text" :value="value" @input="updateInput" :placeholder="placeholderText"/>
</template>

<script>
/* eslint-disable */

import findIndex from 'lodash/findIndex'
import searchData from './searchData'

export default {
  name: "SearchInput",
  props: ['value'],
  data() {
    return {
      setIntervalId: null,
      placeholderText: 'Søk etter ...',
      placeholderTextIndex: -1
    };
  },
  created() {
    this.setIntervalId = setInterval(() => {
      this.changeInputPlaceHolderText()
    }, 4000)
  },
  beforeDestroy() {
    clearInterval(this.setIntervalId)
  },
  methods: {
    updateInput(e) {
      this.$emit('input', e.target.value)
    },
    changeInputPlaceHolderText: function () {
      const placeHolderTextAlternatives = [
        'Søk etter ferie',
        'Søk etter ledelse',
        'Søk etter ansettelse',
      ]
      if (this.placeholderTextIndex + 1 === placeHolderTextAlternatives.length) {
        // if we're at the end of alternatives, start over.
        this.placeholderTextIndex = 0
      } else {
        this.placeholderTextIndex += 1
      }
      this.placeholderText = placeHolderTextAlternatives[this.placeholderTextIndex]
    }
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
