<template>
  <span @click="sortAction(_sort)">
    <i class="fas fa-sort" v-show="sortDefault"></i>
    <i class="fas fa-sort-up" v-show="sortUp"></i>
    <i class="fas fa-sort-down" v-show="sortDown"></i>
  </span>
</template>

<script>
export default {
  name: 'FwSortIcons',
  props: {
    _sort: String
  },
  data: () => ({
    sortDefault: true,
    sortUp: false,
    sortDown: false,
    _sort_type: 'asc'
  }),
  mounted () {
    this.showIcon()
    this.$root.$on('show-icon', () => {
      this.showIcon()
    })
  },
  methods: {
    sortAction (_sort = null) {
      this._sort_type = this._sort_type === 'asc' ? 'desc' : 'asc'
      const orderQuery = { _sort: _sort, _sort_type: this._sort_type }
      this.$router.push({ path: this.$route.fullPath, query: orderQuery }).catch(()=> {})
      this.$root.$emit('sort-data')
      this.showIcon()
    },
    showIcon () {
      // eslint-disable-next-line camelcase
      const url_sort_type = this.$route.query._sort_type
      // eslint-disable-next-line camelcase
      const url_sort = this.$route.query._sort

      // eslint-disable-next-line camelcase
      if (url_sort_type === 'asc' && url_sort === this._sort) {
        this.sortDefault = false
        this.sortUp = false
        this.sortDown = true
        // eslint-disable-next-line camelcase
      } else if (url_sort_type === 'desc' && url_sort === this._sort) {
        this.sortDefault = false
        this.sortUp = true
        this.sortDown = false
      } else {
        this.sortDefault = true
        this.sortUp = false
        this.sortDown = false
      }
    }
  }
}
</script>

<style scoped>
  span {
    cursor: pointer;
  }
</style>
