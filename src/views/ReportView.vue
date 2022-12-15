<template>
  <div class="container animated fadeIn">
    <b-row class="margin-top">
      <FilterSidebar @filter=filter($event) />
    </b-row>
    <b-row class="justify-content-between margin-top">
      <b-col col md="7">
        <PostsTable :data="posts" @update:posts="posts = $event" />
      </b-col>

      <b-col col md="5">
        <PieChart :data="posts" />
      </b-col>
    </b-row>

    <div  @click="$emit('generatePDF')" class="margin-top download-pdf">
      <pdfIcon class="icon" v-b-tooltip.hover title="Descargar como pdf"/>
      <!-- <b-button variant="link" @click="$emit('generatePDF')">
      </b-button> -->
    </div>
  </div>
</template>

<script>
import { fetchPosts } from '@/services/api'

export default {
  name: 'HomeView',
  components: {
    pdfIcon: () => import('@/assets/logos/pdfIcon'),
    PieChart: () => import('@/components/PieChart.component'),
    FilterSidebar: () => import('@/components/FilterSidebar.component'),
    PostsTable: () => import('@/components/PostsTable.component')
  },
  data () {
    return {
      posts: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.posts = fetchPosts()
    },

    filter (query) {
      if (query === true) {
        this.getData()
        return
      }

      const filteredPosts = []

      Object.keys(query).forEach(key => {
        if (query[key] === '') return

        const search = this.posts.filter(p => p[key].includes(query[key].toLowerCase()))
        console.log(search)
        if (!search.length) return

        search.forEach(post => {
          if (!this.checkIfExists(post)) {
            filteredPosts.push(post)
          }
        })
      })

      if (filteredPosts.length) {
        this.posts = [...filteredPosts]
      }
    },
    checkIfExists (data) {
      return this.posts.find(p => p === data).length
    }
  }
}
</script>
