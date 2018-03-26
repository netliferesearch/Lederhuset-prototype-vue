<template>
  <div>
    <div class="lh-search-wrapper">
      <input type="text" v-model="search" placeholder="Søk etter.."/>
    </div>
    <row :key="cat.id" v-for="cat in filteredList">
       <column sm="4">
         <h2>{{cat.categoryTitle}}</h2>
       </column>
      <column sm="6" xsOffset="1">
         <ul>
           <li :key="post.title" class="card" v-for="post in cat.posts">
              <a v-bind:href="post.url" target="_blank">
                  {{ post.title }}
              </a>
           </li>
         </ul>
      </column>
    </row>
  </div>
</template>

<script>
/* eslint-disable */
import SearchAndFilter from "./SearchAndFilter.vue";

const categorizedPosts = [
  {
    id: 1,
    categoryTitle: 'Feriepenger',
    posts: [
      {
        title: 'Feriepenger',
        url: '/tema-side',
        searchableContent: ''
      }
    ]
  },
  {
    id: 2,
    categoryTitle: 'Ledelse og lederrollen',
    posts: [
      {
        title: 'Bygge tillit og kultur',
        url: '/tema-side',
        searchableContent: ''
      },
      {
        title: 'Dette er god ledelse',
        url: '/tema-side',
        searchableContent: ''
      },
      {
        title: 'Lederens årshjul - lederoppgaver',
        url: '/tema-side',
        searchableContent: ''
      }
    ]
  }
]

export default {
  name: "LoggedIn",
  data() {
    return {
      search: "",
      categorizedPosts
    };
  },
  computed: {
    filteredList() {
      return this.categorizedPosts
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
.lh-search-wrapper {
  padding-bottom: 24px;
}
</style>
