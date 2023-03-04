import '@/lib/element-ui'
import '@/services/api/axios'

// import App from '@/App.vue'
import FwUserList from '@/components/FwUserList.vue'
import FwUserShow from '@/components/FwUserShow.vue'

export default {
  install: (Vue: any, options: any) => {
    Vue.component('FwUserList', FwUserList)
    Vue.component('FwUserShow', FwUserShow)
    // Vue.component('AppApp', App)
  },
}
