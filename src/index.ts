import '@/plugins/element-ui'
import '@/plugins/veeValidate'
import '@/plugins/multiselect'

import '@/services/api/axios'

import FwUserList from '@/components/FwUserListComponent.vue'
import FwUserShow from '@/components/FwUserShowComponent.vue'
import FwUserForm from '@/components/FwUserFormComponent.vue'
import TestFwUsersApp from '@/App.vue'

export default {
  install: (Vue: any, options: any) => {
    Vue.component('FwUserList', FwUserList)
    Vue.component('FwUserShow', FwUserShow)
    Vue.component('FwUserForm', FwUserForm)
    Vue.component('TestFwUsersApp', TestFwUsersApp)
  },
}
