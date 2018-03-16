<template>
  <div class="light">
      <scrollactive
      class="my-nav"
      v-on:itemchanged="onItemChanged"
      active-class="active"
      :offset="10"
      :duration="800"
      bezier-easing-value=".5,0,.35,1"
      >
  <a href="#one" class="scrollactive-item">Før du ansetter noen midlertidig</a>
  <a href="#two" class="scrollactive-item">God oppfølging</a>
  <a href="#three" class="scrollactive-item">Tips for å lykkes</a>
  <a href="#four" class="scrollactive-item">Last ned maler</a>
</scrollactive>

        <div class="lh-hero">

            <h1>{{data.siteTitle}}</h1>
            <p>{{data.lead}}</p>

            <ol>
              <li>Før du ansetter midlertidig</li>
              <li>God oppfølging</li>
              <li>Tips for å lykkes</li>
              <li>Last ned maler om «ferie»</li>
            </ol>

        </div>

      <div class="lh-block">
        <div class="lh-block__content">
          <div class="lh-block__grid">
            <div class="lh-block__grid--item">
              <h2>Kort sagt</h2>
            </div>
            <div class="lh-block__grid--item">
              <p>For å ansette midlertidig må arbeidsoppgavene være midlertidige
                eller sesongbaserte.Din motivasjon kan ikke være å omgå
                oppsigelsesvernet, eller å gjøre det lett å
                avslutte arbeidsforhold.</p>
            </div>
          </div>
        </div>

        <div class="lh-block__content" id="one">
            <h1>1. <br>
            Før du ansetter noen midlertidig
            </h1>
        </div>

        <div class="lh-block__content">
            <strong>Krav til deg som ansetter</strong>
            <p>Dersom du avslutter arbeidsforholdet, inntrer en karantene i
              en periode på tolv måneder.I perioden kan du ikke ansette
              andre til de samme arbeidsoppgavene
            </p>

            <strong>Ikke ha mange midlertidig ansatte</strong>
            <p>Du kan ikke ha mer enn 15 prosent av arbeidstakerne på slike kontrakter.</p>

            <strong>Oppsigelsestid</strong>
            <p>Du må varsle skriftlig senest 1 måned før fratredelsestidspunktet,
              dersom en person har vært ansatt i mer enn 1 år.
            </p>

            <v-collapse-wrapper>
                <div class="lh-collapse__header" v-collapse-toggle>
                  <p>Vis lovtekst</p>
                </div>

                <div class="my-content" v-collapse-content>

                  <strong>Lov om midlertidig ansettelse</strong>
                    <p>Dersom en midlertidig ansettelse har vart mer enn fire år
                      sammenhengende, skal du behandle den ansatte som fast ansatt
                      når arbeidsforholdet bir avsluttet. Dersom en midlertidig ansettelse
                      har vart mer enn fire år sammenhengende, skal du behandle den ansatte
                      som fast ansatt når arbeidsforholdet bir avsluttet.
                    </p>

                    <p>Kilde: <a href="#">Lovdata.no</a></p>
                </div>
            </v-collapse-wrapper>
        </div>

            <div class="lh-block__content" id="two">
              <h1>2. <br>
              God Oppfølging
              </h1>
            </div>

            <div class="lh-block__content">
              <strong>Krav til deg som ansetter</strong>
              <p>Gjør vedkommende i stand til å tilpasse seg arbeidsstedet og
                arbeidsoppgavene på en effektiv og god måte.
              </p>

              <p>Gi den ansatte muligheten til å sette seg inn i reglene på arbeidsplassen,
                for eksempel eventuell tariffavtale, personalhåndbok, arbeidsreglement,
                HMS-rutiner, arbeidsrutiner, øvrige sikkerhetsrutiner og annet som
                er relevant.
              </p>

              <strong>Styr forventninger</strong>
              <p>Tydeliggjør forventninger om hvordan vedkommende skal representere
                virksomheten din utad, om eventuelle individuelle mål, hvordan arbeidet
                skal utføres og hvordan du vil at hun eller han samhandler og rapporterer
                internt. Vær så konkret som mulig, og still spørsmål om noe oppleves som
                uklart.
              </p>

              <strong>Lag tydelige rammer for opplæringen</strong>
              <p>Informer om hvordan opplæring skal foregå, og hvilken rutine dere
                skal ha for tilbakemelding om hvordan tilpasningen til den nye jobben
                går.
              </p>

              <strong>Last ned mal</strong>
              <a href="#">Midlertidig ansettelse</a>
              <p>Word-dokument</p>
            </div>

      </div>
  </div>
</template>

<script>
/* eslint-disable */
import data from "@/assets/data/data.json";
export default {
  name: "ThemeSite",
  data() {
    return {
      data
    };
  },
  methods: {
    onItemChanged(event, currentItem, lastActiveItem) {
      // your logic
    }
  },
  beforeCreate: function() {
    document.body.className = "light";
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.my-nav {
  background: white;
  position: fixed;
  bottom: 0;
}
.active {
  color: green;
}
</style>
