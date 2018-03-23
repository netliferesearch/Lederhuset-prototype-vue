<template>
  <div>
        <div class="lh-search-wrapper">
            <input type="text" v-model="search" placeholder="Søk etter.."/>
        </div>
        <row>
        <column sm="4" xsOffset="1">
           <h2>Feriepenger</h2>
        </column>
        <column sm="6">
           <ul>
               <div class="card" v-for="post in filteredList" >
             <li>
                <a v-bind:href="post.link" target="_blank">
                    {{ post.title }}
                </a>
             </li>
            </div>
           </ul>
        </column>
      </row>


  </div>
</template>

<script>
/* eslint-disable */
import SearchAndFilter from "./SearchAndFilter.vue";

class Post {
  constructor(title, link) {
    this.title = title;
    this.link = link;
  }
}
export default {
  name: "LoggedIn",
  data() {
    return {
      search: "",
      postList: [
        new Post("Ferie", "/tema-side"),
        new Post("Feriepenger", "/tema-side"),
        new Post("Ansettelse", "/tema-side"),
        new Post("Kontrakt", "/tema-side"),
        new Post("Sykdom", "/tema-side"),
        new Post("Permisjon", "/tema-side"),
        new Post("Fødsels permisjon", "/tema-side"),
        new Post("Avbryte kontrakt", "/tema-side"),
        new Post("Sykemelding", "/tema-side")
      ]
    };
  },
  computed: {
    filteredList() {
      return this.postList.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  components: {
    SearchAndFilter
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
input {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  border: 1px solid;
  width: 100%;
  height: 50px;
  padding: 10px;
}
</style>
