<template>
  <b-modal v-model="showModal" size="sm" hide-header>
    <template v-if="field === 'type'">
      <b-form-select
        :plain="true"
        v-model="value"
      >
        <option v-for="(item, index) in type" :key="index">
          {{ item }}
        </option>
      </b-form-select>
    </template>

    <template v-if="field === 'network'">
      <b-form-select
        :plain="true"
        v-model="value"
      >
        <option v-for="(item, index) in networks" :key="index">
          {{ item }}
        </option>
      </b-form-select>
    </template>

    <template v-if="field === 'copy'">
      <b-form-textarea
        :placeholder="data"
        v-model="value"
        rows="5"
      />
    </template>

    <template slot="modal-footer">
      <b-button class="corporate-button w-100" @click="apply">EDIT</b-button>
    </template>
  </b-modal>
</template>

<script>
import { NETWORKS, MEDIA } from '@/config'

export default {
  name: 'EditPostsModal',
  props: {
    // data: { Type: Object, default () { return {} } },
    data: String,
    field: { Type: String },
    show: Boolean
  },
  data () {
    return {
      networks: NETWORKS,
      type: MEDIA,
      edit: null
      // value: null
    }
  },
  methods: {
    apply () {
      this.$emit('edit', this.edit)
    }
  },
  computed: {
    showModal: {
      get: function () {
        return this.show
      },
      set: function (newValue) {
        this.$emit('update:show', newValue)
      }
    },
    value: {
      get: function () {
        return this.data
      },
      set: function (newValue) {
        this.edit = newValue
      }
    }
  }
}
</script>
