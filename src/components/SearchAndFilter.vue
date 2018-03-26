<template>
  <div>
    <div class="lh-search-wrapper">
      <input type="text" v-model="search" placeholder="Søk etter.."/>
    </div>
    <row :key="cat.id" v-for="cat in matchList"
      v-if="search.length === 0 || categoryHasAnyMatch(cat)">
       <column sm="4">
         <h2>{{cat.categoryTitle}}</h2>
       </column>
      <column sm="6" xsOffset="1">
         <ul>
           <li :key="post.title" class="card" v-for="post in cat.posts"
              v-if="search.length === 0 || post.match">
              <a v-bind:href="post.url" target="_blank">
                  {{ post.title }}
              </a>
           </li>
           <li :key="post.title" class="card" v-for="post in cat.posts"
              v-if="search.length !== 0 && !post.match">
              <a v-bind:href="post.url" target="_blank" class="lh-unmatched-result">
                  {{ post.title }}
              </a>
           </li>
         </ul>
      </column>
    </row>

    <!-- Here we show categories that were not matched, but greyed out -->
    <row :key="cat.id" v-for="cat in matchList"
      v-if="showUnmatched && search.length !== 0 && !categoryHasAnyMatch(cat)">
       <column sm="4" class="lh-unmatched-result">
         <h2>{{cat.categoryTitle}}</h2>
       </column>
      <column sm="6" xsOffset="1">
         <ul>
           <li :key="post.title" class="card" v-for="post in cat.posts">
              <a v-bind:href="post.url" target="_blank" class="lh-unmatched-result">
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
    return {
      search: "",
      categorizedPosts,
      showUnmatched: true
    };
  },
  created() {
    if (window.location) {
      if (location.search.includes('version=hideUnmatched')) {
        this.showUnmatched = false
      }
    }
  },
  computed: {
    matchList() {
      const searchString = this.search.toLowerCase()
      return this.categorizedPosts.map(category => {
        const { posts = [], categoryTitle = '', searchableContent = '' } = category
        // if we get match on the category itself
        if (searchString.length == 0) {
          // do nothing if there is no search string
        }
        // check if we get a match against the category
        else if (categoryTitle.length > 0 && categoryTitle.toLowerCase().includes(searchString) ||
        searchableContent.length > 0 && searchableContent.toLowerCase().includes(searchString)) {
          category.match = true
        } else {
          category.match = false
        }
        posts.map(post => {
          const {title = '', searchableContent = ''} = post
          // return true if any match or else false
          if (searchString.length == 0) {
            // do nothing if there is no search string
          } else if (title.length > 0 && title.toLowerCase().includes(searchString) ||
          searchableContent.length > 0 && searchableContent.toLowerCase().includes(searchString)) {
            post.match = true
          } else {
            post.match = false
          }
        })
        return category
      })
    }
  },
  methods: {
    categoryHasAnyMatch: function (category) {
      if (category.match) {
        return true
      } else if (some(category.posts, 'match')) {
        return true
      }
      return false
    }
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
.lh-unmatched-result {
  color: #ccc;
}
</style>
