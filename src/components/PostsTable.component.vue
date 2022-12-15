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
          <div class="pointer" @click="openModal(item.network, 'network', item)">
            <logosBrand :brand="item.network" />
          </div>
        </template>

        <template #cell(date)="{item}">
          <span class="posts-table strong">{{ formatDateShort(item.date) }}</span>
        </template>

        <template #cell(copy)="{item}">
          <span class="posts-table__copy pointer" @click="openModal(item.copy, 'copy')" >
            {{ item.copy }}
          </span>
        </template>

        <template #cell(type)="{item}">
          <span class="pointer" @click="openModal(item.type, 'type')" >
            {{ item.type }}
          </span>
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

    <EditModal
      :show="showModal"
      :data="editPost"
      :field="typePost"
      @update:show="showModal = $event"
      @edit="edit($event)"
    />
  </b-card>
</template>

<script>
// import { fetchPosts } from '@/services/api'
import { FIELDS_POSTS_TABLE } from '@/config'
import { formatDateShort } from '@/utils/utils'

export default {
  name: 'PostsTable',
  components: {
    logosBrand: () => import('@/assets/logos/logosBrand.vue'),
    EditModal: () => import('@/components/Modals/EditPostsTable.modal')
  },
  props: {
    data: { Type: Array, default () { return [] } }
  },
  data () {
    return {
      perPage: 2,
      currentPage: 1,

      fields: FIELDS_POSTS_TABLE,
      formatDateShort: formatDateShort,

      editPost: null,
      typePost: '',
      index: null,
      showModal: false
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
    openModal (item, type, index) {
      this.index = this.posts.indexOf(index)
      this.editPost = item
      this.typePost = type

      this.showModal = true
    },

    // You need to re-do the array so the changes makes effect
    edit (value) {
      const postItems = [...this.posts]

      if (this.typePost === 'copy') { postItems[this.index].copy = value }
      if (this.typePost === 'type') { postItems[this.index].type = value }
      if (this.typePost === 'network') { postItems[this.index].network = value }

      this.posts = [...postItems]
      this.showModal = false
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
