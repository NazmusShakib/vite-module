<template>
  <div>
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Users</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item active">Users</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section class="content" v-if="has_permission === true">
      <div class="container-fluid">
        <div class="card">
          <div class="card-header">
            <a
              href="javascript:void(0)"
              class="btn btn-info"
              @click="show_filter = !show_filter"
              ><i class="fa fa-filter"></i>Filter</a
            >
            <div class="card-tools">
              <router-link :to="{ name: 'UserAdd' }" class="btn btn-success">
                <i class="fas fa-plus"></i> New
              </router-link>
              <button class="btn btn-info" @click="exportFile()">
                <i class="fas fa-download"></i> Export
              </button>
            </div>
          </div>
          <form @submit.prevent="setFilters" method="GET" novalidate>
            <div class="card-body" v-if="show_filter">
              <div class="form-row">
                <div class="col-md-6">
                  <div class="form-group form-row">
                    <label class="col-md-3 col-form-label" for="username"
                      >Username</label
                    >
                    <div class="col-md-9">
                      <input
                        type="text"
                        class="form-control"
                        id="username"
                        v-model="filter.username"
                        placeholder="username"
                      />
                    </div>
                  </div>
                  <div class="form-group form-row">
                    <label class="col-md-3 col-form-label" for="name"
                      >Name</label
                    >
                    <div class="col-md-9">
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        v-model="filter.name"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div class="form-group form-row">
                    <label class="col-md-3 col-form-label" for="mobile_no"
                      >Mobile No</label
                    >
                    <div class="col-md-9">
                      <input
                        type="text"
                        class="form-control"
                        id="mobile_no"
                        v-model="filter.mobile_no"
                        placeholder="Mobile No"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group form-row">
                    <label class="col-md-3 col-form-label" for="email"
                      >Email</label
                    >
                    <div class="col-md-9">
                      <input
                        type="text"
                        class="form-control"
                        id="email"
                        v-model="filter.email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="form-group form-row">
                    <label class="col-md-3 col-form-label" for="role"
                      >Role</label
                    >
                    <div class="col-md-9">
                      <el-select
                        v-model="filter.role"
                        name="role"
                        id="role"
                        placeholder="Select role"
                        style="width: 100%"
                      >
                        <el-option
                          v-for="role in roles"
                          :key="role.id"
                          :label="role.role_name"
                          :value="role.id"
                        >
                        </el-option>
                      </el-select>
                    </div>
                  </div>
                  <!--<div class="form-group form-row">
                    <label class="col-md-3 col-form-label" for="organization">Organization</label>
                    <div class="col-md-9">
                      <multiselect
                        id="organization"
                        v-model="filter.organization_id"
                        :options="pre.organizations.map(org => org.id)"
                        :custom-label="opt => pre.organizations.find(x => x.id == opt).org_name"
                        placeholder="Pick Organization" :searchable="true" :multiple="false"
                        class="email"
                      >
                      </multiselect>
                    </div>
                  </div>-->
                  <!-- Date range -->
                  <div class="form-group form-row">
                    <label class="col-md-3 col-form-label" for="created_at"
                      >Created at Range</label
                    >
                    <div class="col-md-9">
                      <date-picker
                        type="datetime"
                        input-class="form-control"
                        v-model="filter.created_at"
                        range
                        lang="en"
                        format="YYYY-MM-DD hh:mm:ss"
                        confirm
                        id="created_at"
                        value-type="YYYY-MM-DD hh:mm:ss"
                      ></date-picker>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-md-9 offset-md-3">
                      <button type="submit" class="btn btn-common m-2px">
                        <i class="fas fa-search"></i> Search
                      </button>
                      <button
                        type="reset"
                        class="btn btn-warning"
                        @click="resetFilter()"
                      >
                        <i class="fas fa-undo"></i>
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div class="overlay" v-if="is_loading">
            <i class="fas fa-2x fa-sync-alt fa-spin"></i>
          </div>
          <div class="card-body p-0">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th style="width: 10px">ID</th>
                    <th>Username</th>
                    <th>
                      Name
                      <fw-sort-icons :_sort="'name'" />
                    </th>
                    <th>
                      Mobile No
                      <fw-sort-icons :_sort="'mobile_no'" />
                    </th>
                    <th>
                      Email
                      <fw-sort-icons :_sort="'email'" />
                    </th>
                    <th>Parent</th>
                    <th>Organization</th>
                    <th>Roles</th>
                    <th>Department</th>
                    <th class="text-right">Action</th>
                  </tr>
                </thead>
                <tbody class="users-list">
                  <tr v-for="(val, index) in list.data" :key="index">
                    <td>{{ val.id }}</td>
                    <td>{{ val.username }}</td>
                    <td>{{ val.name }}</td>
                    <td>{{ val.mobile_no }}</td>
                    <td>{{ val.email }}</td>
                    <td>
                      {{ !_.isEmpty(val.parent) ? val.parent.name : 'NA' }}
                    </td>
                    <td>
                      {{
                        !_.isEmpty(val.organization)
                          ? val.organization.org_name
                          : ''
                      }}
                    </td>
                    <td>
                      <span
                        class="badge bg-success"
                        v-for="(roleValue, roleIndex) in val.roles"
                        :key="roleIndex"
                        >{{ roleValue.name }}</span
                      >
                    </td>
                    <td>
                      {{
                        !_.isEmpty(val.department) ? val.department.name : ''
                      }}
                    </td>
                    <td class="text-right">
                      <router-link
                        :to="{ name: 'UserView', params: { id: val.id } }"
                        class="btn btn-info"
                      >
                        <i class="fas fa-eye"></i>
                      </router-link>
                      <router-link
                        :to="{ name: 'UserEdit', params: { id: val.id } }"
                        class="btn btn-info"
                      >
                        <i class="fas fa-pencil-alt"></i>
                      </router-link>
                      <a
                        class="btn btn-danger"
                        href="javascript:void(0)"
                        @click="deleteUser(val.id, index)"
                        ><i class="fas fa-trash"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="p-4" v-if="_.isEmpty(list.data)">
              <div class="alert alert-default-warning" role="alert">
                No data found!
              </div>
            </div>
          </div>
          <div class="card-footer">
            <fw-pagination
              :pagination="list"
              v-if="list.total > list.per_page"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="content" v-if="has_permission === false">
      <div class="alert alert-danger alert-dismissible">
        <h5><i class="icon fas fa-ban"></i> Permission denied!</h5>
      </div>
    </section>
  </div>
</template>

<script>
import FwPagination from '@/components/partials/FwPagination.vue'
import FwSortIcons from '@/components/partials/FwSortIcons.vue'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import { CommonAPI, UserAPI, RoleAPI } from '@/services/api'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fileDownload = require('js-file-download')
const filterable = {
  username: '',
  name: '',
  mobile_no: '',
  email: '',
  role: '',
  created_at: '',
}

export default {
  name: 'FwUserList',
  metaInfo: {
    title: 'User list | Dotlines',
  },
  components: {
    DatePicker,
    FwPagination,
    FwSortIcons,
  },
  data: () => ({
    list: {
      total: 0,
      per_page: 1,
      from: 1,
      to: 0,
    },
    order_by: 'asc',
    show_filter: false,
    roles: {},
    filter: filterable,
    pre: [],
    is_loading: false,
    has_permission: true,
  }),
  watch: {
    '$route.query'() {
      this.getUsers()
    },
  },
  mounted: function () {
    this.init()
  },
  created: function () {},
  methods: {
    init() {
      this.getRoles()
      this.getOrganization()
      this.getUsers()

      this.$root.$on('sort-data', () => {
        this.$root.$emit('show-icon')
      })
      Object.keys(this.$route.query).forEach((key) => {
        if (key in this.filter) {
          this.filter[key] = this.$route.query[key]
          this.show_filter = true
        }
      })
    },
    getRoles() {
      RoleAPI.index().then((roles) => {
        this.roles = roles.data.map((role) => {
          return { id: role.id, role_name: role.name }
        })
      })
    },
    getUsers() {
      this.is_loading = true
      const query = { ...this.filter, ...this.$route.query }
      UserAPI.getUsers(query)
        .then((list) => {
          this.list = list
        })
        .finally(() => {
          this.is_loading = false
        })
    },
    async getOrganization() {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const _this = this
      await CommonAPI.getAllOrganizations().then((organizations) => {
        _this.pre.organizations = organizations
      })
    },
    deleteUser: function (id, index) {
      const _this = this
      _this.$swal
        .fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          confirmButtonText: 'Yes, delete it!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
        })
        .then((result) => {
          if (result.isConfirmed) {
            _this.is_loading = true
            UserAPI.deleteUser(id)
              .then((response) => {
                _this.list.data.splice(index, 1)
                _this.$toaster.success(response.message)
                _this.is_loading = false
              })
              .catch((error) => {
                _this.is_loading = false
                console.log(error)
                _this.$swal.fire('Failed!', 'Failed to delete.', 'error')
              })
          }
        })
    },
    async setFilters() {
      await this.$router
        .push({
          path: this.$route.path,
          query: this.filter,
        })
        .catch(() => {})
    },
    resetFilter() {
      this.filter = {}
      this.$router.push({ path: this.$route.path }).catch(() => {})
      this.$root.$emit('show-icon')
      this.show_filter = false
    },
    exportFile() {
      //
    },
  },
}
</script>
