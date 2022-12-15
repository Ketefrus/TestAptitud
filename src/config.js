export const FIELDS_POSTS_TABLE = [
  { key: 'clearSort', label: '' },
  { key: 'network', label: '', sortable: true },
  { key: 'date', label: 'Date', sortable: true },
  { key: 'copy', label: 'Message', sortable: true, tdClass: 'posts-table__copy-td', thStyle: { width: '30%' } },
  { key: 'type', label: 'type', sortable: true, thStyle: { width: '30%' } },
  { key: 'impressions', label: 'Impressions', sortable: true, thStyle: { width: '40%', 'padding-right': '1.5em' } },
  { key: 'clearSortEnd', label: '' }
]

export const NETWORKS = [
  'twitter', 'facebook', 'instagram'
]

export const MEDIA = ['video', 'image']

export const CHART_DONUT_OPTIONS = {
  chart: { type: 'donut' },
  labels: [],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
}
