<template>
    <div>
<affix
            class="content-nav"
            relative-element-selector="#theme-content"
            :offset="{ top: 60, bottom: 40 }"
          >
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
<style lang="scss" scoped>
.content-nav {
  background: white;
  top: 0;
  left: 0;
  padding: 20px;
  // text-align: center;
  width: 100%;
  a {
    font-size: 16px;
    color: #000000;
    border-right: 1px solid;
    padding: 0 10px;
  }
}
.active {
  color: #a50e68 !important;
  border-right: 1px solid green;
}
</style>
