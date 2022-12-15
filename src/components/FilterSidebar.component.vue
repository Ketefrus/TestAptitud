<template>
  <b-card nobody class="horizm-card filterSideBar__card">
    <b-card-body>
      <div class="filterSideBar__title strong">
        Filter
      </div>
      <b-row>
        <b-col cols="1" class="filterSideBar__label">
          <label for="network">Network:</label>
        </b-col>
        <b-col cols="3">
          <b-form-group>
            <!-- <label for="network">Network</label> -->
            <b-form-input
              type="text" id="network" v-model="filter.network"
              placeholder="All networks"
              name="name" class="form-control"
              v-on:keyup.enter="apply">
            </b-form-input>
          </b-form-group>
        </b-col>

        <b-col cols="1" class="filterSideBar__label">
          <label for="type">Type:</label>
        </b-col>
        <b-col cols="3">
          <b-form-group>
            <!-- <label for="type">Type</label> -->
            <b-form-input
              type="text" id="type" v-model="filter.type"
              placeholder="All types"
              name="type" class="form-control"
              v-on:keyup.enter="apply">
            </b-form-input>
          </b-form-group>
        </b-col>

        <b-col cols="1" class="filterSideBar__label">
          <label for="message">Message:</label>
        </b-col>
        <b-col cols="3">
          <b-form-group>
            <!-- <label for="message">Message</label> -->
            <b-form-input
              type="text" id="message" v-model="filter.copy"
              placeholder=""
              name="message" class="form-control"
              v-on:keyup.enter="apply">
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <div class="filterSideBar__footer">
        <b-button class="filterSideBar__button" pill  @click="apply">
          APPLY FILTER
        </b-button>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: 'FilterSidebar',
  data () {
    return {
      filter: {
        type: '',
        network: '',
        copy: ''
      }
    }
  },
  methods: {
    apply () {
      if (this.filter.type === '' && this.filter.network === '' && this.filter.copy === '') {
        this.$emit('filter', true)
        return
      }
      // Here would go the query
      this.$emit('filter', this.filter)
    }
  }
}
</script>

<style lang="scss" src="@/assets/scss/FilterSideBar.scss" />
