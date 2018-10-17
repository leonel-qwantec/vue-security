<template>
  <v-layout>
    <v-flex text-xs-center>
      <v-card 
        v-for="(article, index) in articles"
        :key="article.id"
        :color="picker(index)"
        class="white--text"
      >
        <v-card-title primary-title>
          <div 
            class="headline">{{ article.title }}
          </div>
          <div>{{ article.content }}</div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import articlesPerimeter from '~/perimeters/articlesPerimeter'

  export default {
    routePerimeter: articlesPerimeter,
    routePerimeterAction: 'read',
    data () {
      return {
        articles: [
          {id: 1, title: 'Article 1', content: 'Content Article 1'},
          {id: 2, title: 'Article 2', content: 'Content Article 2'},
          {id: 3, title: 'Article 3', content: 'Content Article 3'}
        ]
      }
    },
    mounted () {
      console.log(this)
    },
    methods: {
      picker(index) {
        return index % 2 == 0 ? 'red' : 'blue';
      }
    },
  }
</script>
