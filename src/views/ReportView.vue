<template>
  <div class="container animated fadeIn">
  <b-row class="justify-content-between">
    <!-- <FilterSidebar /> -->
    <b-col col md="7">
      <PostsTable :data="posts" @update:posts="posts = $event" />
    </b-col>

    <b-col col md="5">
      <PieChart :data="posts" />
    </b-col>
  </b-row>

  </div>
</template>

<script>
import { fetchPosts } from '@/services/api'

export default {
  name: 'HomeView',
  components: {
    PieChart: () => import('@/components/PieChart.component'),
    // FilterSidebar: () => import('@/components/FilterSidebar.component'),
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
    }
  }
}
</script>
