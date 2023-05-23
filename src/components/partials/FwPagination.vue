<template>
  <el-pagination
    background
    layout="prev, pager, next"
    @current-change="changePage"
    :page-size="pagination.per_page"
    :pager-count="5"
    :total="pagination.total"
    :current-page="pagination.current_page"
    class="float-right"
  >
  </el-pagination>
</template>
<script>
export default {
  props: {
    pagination: {
      type: Object,
      required: true,
    },
    offset: {
      type: Number,
      default: 4,
    },
  },
  computed: {
    pagesNumber() {
      if (!this.pagination.to) {
        return []
      }
      let from = this.pagination.current_page - this.offset
      if (from < 1) {
        from = 1
      }
      let to = from + this.offset * 2
      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page
      }
      const pagesArray = []
      for (let page = from; page <= to; page++) {
        pagesArray.push(page)
      }
      return pagesArray
    },
  },
  methods: {
    changePage(page) {
      this.pagination.current_page = page
      // this.$router.push({ path: this.$route.fullPath, query: { page: page } })
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      this.$router
        .push({ path: this.$route.fullPath, query: { page: page } })
        .catch(() => {})
      // this.$emit('paginate')
    },
  },
}
</script>
