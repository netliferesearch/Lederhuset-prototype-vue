<template>
<div>
    <v-select
      :options="options"
      label="title"
      placeholder="Jeg har nettop ansatt noen for første gang 😬"
    >
      <template slot="option" slot-scope="option">
        <a :href=option.link>
          <h4>{{ option.title }}</h4>
          <p>{{ option.lead }}</p>
        </a>
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
          url: "https://www.nrk.no/"
        },
        {
          title: "Ansettelse",
          lead: "En liten beskrivelse på temaet",
          url: "https://www.nrk.no/"
        },
        {
          title: "Avskaffelse",
          lead: "En liten beskrivelse på temaet",
          url: "https://www.nrk.no/"
        },
        {
          title: "Sykemelding",
          lead: "En liten beskrivelse på temaet",
          url: "https://www.nrk.no/"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
