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
const categorizedPosts = [
  {
    id: 1,
    categoryTitle: 'Feriepenger',
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
];

const isMatchWithPost = ({post, searchString}) => {
  const stringsToCheck = ['title', 'searchableContent', 'additionalSearchInfo']
  return stringsToCheck.reduce((result, propertyToCheck) => {
      const content = post[propertyToCheck] || ''
      if (content.toLowerCase().includes(searchString.toLowerCase())) {
        return true
      }
      return false
  }, false)
}

function search({content = [], searchString = '' }) {
  console.log('searching in content', content);
  return content.reduce((acc, category) => {
    console.log('category in reduce', category);
    const postsWithMatch = []
    const { posts = [] } = category
    posts.map(post => {
      console.log('post', post);
      if (isMatchWithPost({post, searchString})) {
        postsWithMatch.push(post)
      }
    })
    if (postsWithMatch.length > 0) {
      debugger
      return acc.push({...category, ...{posts: postsWithMatch}})
    }
    return acc
  }, [])
}

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
      return this.categorizedPosts.reduce((acc, category) => {
        const { posts = [] } = category
        const postsWithMatch = posts.filter(({title = '', searchableContent = ''}) => {
          return title.toLowerCase().includes(this.search) ||
          searchableContent.toLowerCase().includes(this.search) ||
          false
        })
        if (postsWithMatch.length > 0) {
          const match = {...category, ...{ posts: postsWithMatch} }
          return acc.push(match)
        }
        return acc
      }, [])
    }
  },
  components: {}
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
