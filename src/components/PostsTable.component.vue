<template>
  <b-card class="horizm-card posts-table" no-body>
    <div class="posts-table__header">
      <p class="posts-table__title">Posts Analysis</p>
      <p class="posts-table__subtitle text-muted">The current report contains <span class="highlight"> {{ totalPosts }} </span> posts</p>
    </div>

    <div class="posts-table__info">
      <b-table
        :fields=fields
        :items="posts"
        label-sort-asc=""
        label-sort-desc=""
        label-sort-clear=""
        :class="'horizm-table'"
        :thead-class="'posts-table__thead'"
        tbody-tr-class="posts-table__tr text-muted"
        :per-page=perPage
        :current-page="currentPage"
        borderless
        responsive
      >
        <template #cell(network)="{item}">
          <logosBrand :brand="item.network" />
        </template>

        <template #cell(date)="{item}">
          <span class="posts-table strong">{{ formatDateShort(item.date) }}</span>
        </template>

        <template #cell(copy)="{item}">
          <span
            v-if="!item.editMode"
            v-b-tooltip.hover.v-info :title="'Click to edit'"
            class="posts-table__copy" @click="showInput(item, true)"
          >
            {{ item.copy }}
          </span>

          <b-form-input
            v-else
            type="text" id="copy"
            class="form-control"
            v-model="item.copy"
            @keyup.enter="showInput(item, false)" @focusout="showInput(item, false)"
          />
        </template>

        <template #cell(impressions)="{item}">
          <span class="posts-table__impressions">{{ item.impressions | number }}</span>
        </template>
      </b-table>
      <div class="posts-table__pagination">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalPosts"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
      </div>
    </div>
  </b-card>
</template>

<script>
// import { fetchPosts } from '@/services/api'
import { FIELDS_POSTS_TABLE } from '@/config'
import { formatDateShort } from '@/utils/utils'

export default {
  name: 'PostsTable',
  components: {
    logosBrand: () => import('@/assets/logos/logosBrand.vue')
  },
  props: {
    data: { Type: Array, default () { return [] } }
  },
  data () {
    return {
      perPage: 2,
      currentPage: 1,

      fields: FIELDS_POSTS_TABLE,
      formatDateShort: formatDateShort
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.posts = this.posts.map(p => {
        p.editMode = false
        return p
      })
    },
    // You need to re-do the array so the changes makes effect
    showInput (item, value) {
      const postItems = [...this.posts]
      const index = this.posts.findIndex(p => p === item)

      postItems[index].editMode = value
      this.posts = [...postItems]
    }
  },
  computed: {
    posts: {
      get: function () { return this.data },
      set: function (val) { this.$emit('update:posts', val) }
    },
    totalPosts () {
      return this.posts.length
    }
  }
}
</script>

<style lang='scss' src='@/assets/scss/PostsTable.scss' />
