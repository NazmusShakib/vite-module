// import Vue from 'vue'
// import VueRouter from 'vue-router'

//  Vue.use(VueRouter)
// import MasterLayout from '@/components/layouts/MasterLayoutComponent.vue'

import UserList from '@/pages/UserList.vue'

const routes = [
  {
    path: '/admin/module/auth/users',
    name: '_UserList',
    meta: { requireAuth: true },
    component: UserList,
  },
  {
    path: '/admin/module/auth/users/add',
    name: '_UserForm',
    meta: { requireAuth: true },
    component: () => import('@/pages/UserForm.vue'),
  },
]

export default routes

// export default new VueRouter({
//   mode: 'history',
//   routes,
// })
