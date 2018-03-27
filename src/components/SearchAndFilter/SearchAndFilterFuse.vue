<template>
  <div>
    <div class="lh-search-wrapper">
      <SearchInput v-model="search" />
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
import searchData from './searchData'
import SearchInput from './SearchInput'

export default {
  name: "SearchAndFilter",
  components: {
    SearchInput
  },
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
      fuse: new Fuse(searchData, options),
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
.lh-search-wrapper {
  padding-bottom: 24px;
}
.lh-unmatched-result {
  color: #ccc;
}
</style>
