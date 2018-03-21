<template>
        <container class="lh-block">
          <row id="four">
                <column sm="6" smOffset="3" class="lh-block__factBox">
                  <h4>Fakta</h4>
                <p>Vanligvis skal du gi fast ansettelse til folk. Det finnes likevel
                noen unntak hvor du har lov til å gi midlertidig ansettelse:</p>
                <ul>
                  <li>arbeid av midlertidig karakter (f.eks. sesongarbeid)</li>
                  <li>en annen ansatt (vikariat)</li>
                  <li>praksisarbeid</li>
                  <li>deltakelse i arbeidsmarkedstiltak</li>
                  <li>arbeid med organisert idrett</li>
                  <li>behov for kortvarig arbeidskraft (inntil 12 mnd.)</li>
                </ul>
                </column>
            </row>
            </container>
</template>

<script>
/* eslint-disable */
import data from "@/assets/data/data.json";
export default {
  name: "ThemeFacts",
  data() {
    return {
      data
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
