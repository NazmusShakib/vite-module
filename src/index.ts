import '@/plugins/element-ui'
import '@/plugins/veeValidate'
import '@/plugins/multiselect'
import '@/services/api/axios'
const _ = require('lodash')

/* import _ from 'lodash'
Vue.prototype._ = _ */

import FwUserList from '@/components/FwUserListComponent.vue'
import FwUserShow from '@/components/FwUserShowComponent.vue'
import FwUserForm from '@/components/FwUserFormComponent.vue'
import TestFwUsersApp from '@/App.vue'

// import * as components from './components'

export default {
  install: (Vue: any, options: any) => {
    Vue.component('FwUserList', FwUserList)
    Vue.component('FwUserShow', FwUserShow)
    Vue.component('FwUserForm', FwUserForm)
    Vue.component('TestFwUsersApp', TestFwUsersApp)
  },
}

export * from './components'


/* import Vue from 'vue'
import App from '@/App.vue'

new Vue({
  render: (h) => h(FwUserList),
}).$mount('#app') */
