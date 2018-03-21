<template>
  <div class="hello">

    <section>
      <h1>Scroll down!</h1>
    </section>

    <section v-scroll-reveal.reset>
      <h1>Tada!</h1>
    </section>

    <section v-scroll-reveal.reset>
      <h1>Slightly late tada!</h1>
    </section>

    <container>
      <row>
          <column xs="12" sm="6">
            <h2>{{ siteTitle }}</h2>
            <p>{{ lead }}</p>
          </column>
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
  <div :class="{ red: active }">Nå er jeg større</div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    xs: "12",
    sm: "6"
  },
  name: "Home",
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
  background-color: var(--color-primary);
  width: 300px;
  height: 300px;
  font-size: 30px;
}
</style>
