<template>
  <div class="container animated fadeIn">
  <b-row class="justify-content-between">
    <!-- <FilterSidebar /> -->
    <b-col cols="7">
      <PostsTable />
    </b-col>

    <b-col cols="4">
      <PieChart />
    </b-col>
  </b-row>

  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    PieChart: () => import('@/components/PieChart.component'),
    // FilterSidebar: () => import('@/components/FilterSidebar.component'),
    PostsTable: () => import('@/components/PostsTable.component')
  }
}
</script>
