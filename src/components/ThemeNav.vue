<template>
    <div>
      <affix class="content-nav"
      relative-element-selector="#theme-content"
      :offset="{ top: 0, bottom: 140 }">
                <scrollactive
                    v-on:itemchanged="onItemChanged"
                    active-class="active"
                    :offset="10"
                    :duration="800"
                    bezier-easing-value=".5,0,.35,1"
                    >

                <a href="#one" class="scrollactive-item">
                  1. Før du ansetter noen midlertidig
                </a>
                <a href="#two" class="scrollactive-item">2. God oppfølging</a>
                <a href="#three" class="scrollactive-item">3. Tips for å lykkes</a>
                <a href="#four" class="scrollactive-item">4. Last ned maler</a>
              </scrollactive>
          </affix>
    </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "ThemeNav",
  data() {
    return {};
  },
  methods: {
    onItemChanged(event, currentItem, lastActiveItem) {
      // your logic
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
