<template>
  <div id="chart" v-if=!loading>
    <apexchart
      dataType="donut"
      :series="series"
      :options="chartOptions"
    />
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import { CHART_DONUT_OPTIONS, NETWORKS, MEDIA } from '@/config'
export default {
  name: 'ChartsComponent',
  components: {
    apexchart: VueApexCharts
  },
  props: {
    data: { type: Array, default () { return [] } },
    type: { type: String }
  },
  data () {
    return {
      series: [],
      // chartOptions: CHART_DONUT_OPTIONS,
      // dataType: this.type === 'network' ? NETWORKS : MEDIA,

      loading: true
    }
  },
  mounted () {
    this.loading = true
    this.drawChart()
  },
  computed: {
    chartOptions () {
      return CHART_DONUT_OPTIONS
    },
    dataType () {
      return this.type === 'network' ? NETWORKS : MEDIA
    }
  },
  methods: {
    drawChart () {
      this.series = []
      this.chartOptions.labels = []

      this.dataType.forEach(dataType => {
        this.chartOptions.labels.push(dataType)
        const serie = this.data.filter(p => p[this.type] === dataType)
        this.series.push(serie.length)
      })

      this.loading = false
    }
  }
}
</script>
