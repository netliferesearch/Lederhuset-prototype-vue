<template>
  <div>
    <div class="lh-search-wrapper">
      <input type="text" v-model="search" placeholder="Søk etter.."/>
    </div>
    <row :key="cat.id" v-for="cat in matchList">
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

import some from 'lodash/some'
import Fuse from 'fuse.js'

const categorizedPosts = [
  {
    id: 1,
    categoryTitle: 'Feriepenger',
    searchableContent: '',
    posts: [
      {
        title: 'Feriepenger',
        url: '/tema-side',
        searchableContent: '',
      },
    ],
  },
  {
    id: 2,
    categoryTitle: 'Ledelse og lederrollen',
    searchableContent: '',
    posts: [
      {
        title: 'Bygge tillit og kultur',
        url: '/tema-side',
        searchableContent: '',
      },
      {
        title: 'Dette er god ledelse',
        url: '/tema-side',
        searchableContent: '',
      },
      {
        title: 'Lederens årshjul - lederoppgaver',
        url: '/tema-side',
        searchableContent: '',
      },
    ],
  },
  {
    id: 3,
    categoryTitle: 'Arbeidstid',
    searchableContent: '',
    posts: [
      {
        title: 'Arbeidstid og overtid deltid, fleksitid, turnus',
        url: '/tema-side',
        searchableContent: '',
      },
      {
        title: 'Helligdager, religiøse høytider, kvelds- og nattjobbing, ugunstig arbeidstid',
        url: '/tema-side',
        searchableContent: '',
      },
      {
        title: 'Fri og uavhengig stilling',
        url: '/tema-side',
        searchableContent: '',
      },
      {
        title: 'Redusert arbeidstid, fri- og uavhengig stilling',
        url: '/tema-side',
        searchableContent: '',
      },
      {
        title: 'Overtid og avspasering',
        url: '/tema-side',
        searchableContent: '',
      },
    ],
  },
];

export default {
  name: "SearchAndFilter",
  data() {
    const options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "categoryTitle",
        "searchableContent",
        "posts.title",
        "posts.searchableContent"
      ]
    };
    return {
      fuse: new Fuse(categorizedPosts, options),
      search: ""
    };
  },
  computed: {
    matchList() {
      return this.fuse.search(this.search)
    }
  },
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
.lh-unmatched-result {
  color: #ccc;
}
</style>
