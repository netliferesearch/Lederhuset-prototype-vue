<template>
<div>
    <v-select
      :options="options"
      label="title"
      placeholder="Jeg har nettop ansatt noen for første gang 😬"
    >
      <template slot="option" slot-scope="option">
        <router-link to="/tema-side">
          <p>{{ option.title }}<br />
          {{ option.lead }}</p>
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
          url: "/tema-side"
        },
        {
          title: "Ansettelse",
          lead: "En liten beskrivelse på temaet",
          url: "/tema-side"
        },
        {
          title: "Avskaffelse",
          lead: "En liten beskrivelse på temaet",
          url: "/tema-side"
        },
        {
          title: "Sykemelding",
          lead: "En liten beskrivelse på temaet",
          url: "/tema-side"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
