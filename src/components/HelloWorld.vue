<template>
  <div class="hello">
    <h1>{{ siteTitle }}</h1>
    <h2>{{ lead }}</h2>

    <container>
      <row>
          <column>1</column>
          <column>1</column>
      </row>
    </container>

    <button @click="show = !show" :aria-expanded="show ? 'true' : 'false'">
    Trykk på meg!
  </button>
  <p v-if="show">Hei, her er jeg!</p>
  <br>
  <br>
  <br>
  <button @click="active = !active" :aria-pressed="active ? 'true' : 'false'">
    Gjør meg større
  </button>
  <div :class="{ red: active }">
    <button @click="active = !active" :aria-pressed="active ? 'true' : 'false'">
    lukk meg igjen
  </button>
    Nå er jeg større</div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    hero: true,
    xs: "6"
  },
  name: "HelloWorld",
  data() {
    return {
      siteTitle: "Dette blir bra!",
      lead: `Lederhuset er en portal for ledere og arbeidsgivere
        med praktiske verktøy og juridisk veiledning samlet på et sted.`,
      show: false,
      active: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.red {
  background-color: red;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
