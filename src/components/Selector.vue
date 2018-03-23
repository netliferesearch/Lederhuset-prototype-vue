<template>
<div>
    <v-select
      :options="options"
      label="keywords"
      placeholder="Lurer du på noe om feriepenger?"
    >
      <template slot="option" slot-scope="option">
        <router-link :to="option.url">
          <p>{{ option.title }}<br />
          {{ option.lead }}
          </p>
        </router-link>
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
          title: "Ferie",
          lead: "En liten beskrivelse på temaet",
          keywords: "lønn ferie feriepenger fri helg",
          url: "/tema-side"
        },
        {
          title: "Ansettelse",
          lead: "En liten beskrivelse på temaet",
          keywords: "money",
          url: "/tema-side"
        },
        {
          title: "Avskaffelse",
          lead: "En liten beskrivelse på temaet",
          keywords: "sparken",
          url: "/tema-side"
        },
        {
          title: "Sykemelding",
          lead: "En liten beskrivelse på temaet",
          keywords: "hodepine",
          url: "/tema-side"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.v-select .dropdown-toggle {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: block;
  padding: 20px;
  background: none;
  border-top: 2px solid transparent;
  border-right: 2px solid transparent;
  border-left: 2px solid transparent;
  border-bottom: 2px solid;
  white-space: normal;
}
</style>
