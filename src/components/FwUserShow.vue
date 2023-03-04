<template>
  <div>
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>User detail</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'Home' }">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'Users' }">Users</router-link>
              </li>
              <li class="breadcrumb-item active">Show</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section class="content">
      <div class="container-fluid">
        <div class="card" id="users">
          <div class="overlay" v-if="is_loading">
            <i class="fas fa-2x fa-sync-alt fa-spin"></i>
          </div>
          <div class="card-header">
            <h3 class="card-title">Show</h3>
            <div class="card-tools">
              <router-link class="btn btn-info" :to="{ name: 'Users' }"
                ><i class="fas fa-list"></i> List
              </router-link>
            </div>
          </div>
          <div class="card-body">
            <div class="media align-items-center mb-3">
              <img
                v-bind:src="value.avatar"
                class="img-circle img-avatar mr-3"
              />
              <div class="media-body">
                <h6 class="m-0">{{ value.name }}</h6>
              </div>
            </div>
            <div class="custom-list">
              <ul>
                <li><strong>Account Type</strong> {{ value.account_type }}</li>
                <li><strong>Username</strong> {{ value.username }}</li>
                <li><strong>Mobile No</strong>{{ value.mobile_no }}</li>
                <li><strong>Email</strong>{{ value.email }}</li>
                <li>
                  <strong>Organization</strong
                  >{{
                    !_.isEmpty(value.organization)
                      ? value.organization.org_name
                      : ''
                  }}
                </li>
                <li>
                  <strong>Department</strong
                  >{{
                    !_.isEmpty(value.department) ? value.department.name : ''
                  }}
                </li>
                <li>
                  <strong>Roles</strong>
                  <span
                    class="badge bg-success"
                    v-for="roleValue in value.roles"
                    :key="roleValue.name"
                    >{{ roleValue.name }}</span
                  >
                </li>
                <li>
                  <strong>Permissions</strong>
                  <span
                    class="badge bg-success"
                    v-for="permissionValue in value.permissions"
                    :key="permissionValue.name"
                    >{{ permissionValue.name }}</span
                  >
                </li>
                <li>
                  <strong>Status</strong
                  ><span
                    class="badge bg-success"
                    v-if="value.active_status == 1"
                    >Active</span
                  >
                  <span class="badge bg-success" v-else>Inactive</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { UserAPI } from '@/services/api'

export default {
  name: 'FwUserShow',
  metaInfo: {
    title: 'User show | Dotlines',
  },
  data: () => ({
    value: {
      avatar: '',
      account_type: '',
    },
    is_loading: false,
  }),
  mounted: function () {
    this.userDetail()
  },
  methods: {
    userDetail() {
      let _this = this
      _this.is_loading = true
      let param = _this.$route.params
      UserAPI.getUser(param.id)
        .then((response) => {
          _this.value = response
        })
        .catch((error) => {
          console.log('user-detail error ' + error)
        })
        .finally(() => {
          _this.is_loading = false
        })
    },
  },
}
</script>
