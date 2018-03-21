<template>
    <div>
        <container class="lh-block">
            <row>
                <column xs="12" sm="2" xsOffset="3">
                  <h3>Kort sagt</h3>
                </column>
                <column xs="12" sm="4">
                  <p>For å ansette midlertidig må arbeidsoppgavene være midlertidige
                eller sesongbaserte.Din motivasjon kan ikke være å omgå
                oppsigelsesvernet, eller å gjøre det lett å
                avslutte arbeidsforhold.</p>
                </column>
            </row>
          </container>

          <container class="lh-block">
            <row id="one">
                <column sm="10" smOffset="1" class="lh-block__content">
                  <h1>1. <br>
                    Før du ansetter noen midlertidig
                 </h1>
                </column>
            </row>
            <row>
                <column sm="6" smOffset="3">
                  <h3>Kanskje enda en tittel her først</h3>
            <h4>Krav til deg som ansetter</h4>
            <p>Dersom du avslutter arbeidsforholdet, inntrer en karantene i
              en periode på tolv måneder.I perioden kan du ikke ansette
              andre til de samme arbeidsoppgavene
            </p>

            <h4>Ikke ha mange midlertidig ansatte</h4>
            <p>Du kan ikke ha mer enn 15 prosent av arbeidstakerne på slike kontrakter.</p>

            <h4>Oppsigelsestid</h4>
            <p>Du må varsle skriftlig senest 1 måned før fratredelsestidspunktet,
              dersom en person har vært ansatt i mer enn 1 år.
            </p>

            <v-collapse-wrapper>
                <div class="lh-collapse__header" v-collapse-toggle>
                  <u>Vis lovtekst</u>
                </div>

                <div class="my-content" v-collapse-content>

                  <h4>Lov om midlertidig ansettelse</h4>
                    <p>Dersom en midlertidig ansettelse har vart mer enn fire år
                      sammenhengende, skal du behandle den ansatte som fast ansatt
                      når arbeidsforholdet bir avsluttet. Dersom en midlertidig ansettelse
                      har vart mer enn fire år sammenhengende, skal du behandle den ansatte
                      som fast ansatt når arbeidsforholdet bir avsluttet.
                    </p>

                    <p>Kilde: <a href="#">Lovdata.no</a></p>
                </div>
            </v-collapse-wrapper>
                </column>
            </row>
          </container>


          <container class="lh-block">
            <row id="two">
                <column sm="10" smOffset="1" class="lh-block lh-block__content">
                  <h1>2. <br>
                    God Oppfølging
                 </h1>
                </column>
            </row>
            <row>
                <column sm="6" smOffset="3">
                  <h4>Krav til deg som ansetter</h4>
                  <p>Gjør vedkommende i stand til å tilpasse seg arbeidsstedet og
                    arbeidsoppgavene på en effektiv og god måte.
                  </p>

                  <p>Gi den ansatte muligheten til å sette seg inn i reglene på arbeidsplassen,
                    for eksempel eventuell tariffavtale, personalhåndbok, arbeidsreglement,
                    HMS-rutiner, arbeidsrutiner, øvrige sikkerhetsrutiner og annet som
                    er relevant.
                  </p>
                </column>
            </row>

            <row>
              <blockquote>
                Vær så konkret som mulig, og still spørsmål om noe oppleves som uklart.
              </blockquote>
            </row>

            <row>
                <column sm="6" smOffset="3">
                  <h4>Styr forventninger</h4>
                  <p>Tydeliggjør forventninger om hvordan vedkommende skal representere
                    virksomheten din utad, om eventuelle individuelle mål, hvordan arbeidet
                    skal utføres og hvordan du vil at hun eller han samhandler og rapporterer
                    internt. Vær så konkret som mulig, og still spørsmål om noe oppleves som
                    uklart.
                  </p>

                  <h4>Lag tydelige rammer for opplæringen</h4>
                  <p>Informer om hvordan opplæring skal foregå, og hvilken rutine dere
                    skal ha for tilbakemelding om hvordan tilpasningen til den nye jobben
                    går.
                  </p>
                </column>
            </row>

            <row id="three">
                <column xs="12" sm="2" xsOffset="3">
                  <img src="../assets/hockey.gif">
                </column>
                <column xs="12" sm="4">
                  <h4>Last ned mal</h4>
                    <a href="#">Midlertidig ansettelse</a>
                    <p>Word-dokument</p>
                </column>
            </row>
          </container>

            <ThemeFacts />
    </div>
</template>

<script>
/* eslint-disable */
import data from "@/assets/data/data.json";
import ThemeFacts from "./ThemeFacts.vue";
export default {
  name: "ThemeContent",
  data() {
    return {
      data
    };
  },
  components: {
    ThemeFacts
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
