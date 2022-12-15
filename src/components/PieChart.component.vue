<template>
  <b-card class="horizm-card posts-charts__card" no-body>
    <div class="posts-table__header">
      <div class="posts-charts__title">Impresions by Media Types Analysis</div>
    </div>

    <b-tabs
      v-model="tabIndex"
      :content-class="`mt-3 posts-chart__tabs`"
      class="posts-charts__titleTabs"
      nav-wrapper-class="posts-charts__nav"
    >
      <b-tab title="Media Types" title-item-class="posts-charts__tab" title-link-class="posts-charts__tab" lazy>
        <div id="chart">
          <Charts :data="data" :type="'network'" />
        </div>
      </b-tab>

      <b-tab title="Networks" title-item-class="posts-charts__tab" title-link-class="posts-charts__tab" lazy>
        <Charts :data="data" :type="'type'" />
      </b-tab>
    </b-tabs>

  </b-card>
</template>

<script>
export default {
  name: 'PieChart',
  components: {
    Charts: () => import('@/components/ChartsComponent')
  },
  props: {
    data: { type: Array, default () { return [] } }
  },
  data () {
    return {
      tabIndex: 0
    }
  }
}
</script>

<style lang="scss" src="@/assets/scss/PieChart.scss" />
