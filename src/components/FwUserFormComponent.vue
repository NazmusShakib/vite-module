<template>
  <div>
    <section class="content-header">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6">
            <h1>Users</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'Home' }">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'Users' }">Users</router-link>
              </li>
              <li class="breadcrumb-item active">Form</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section class="content">
      <div class="container-fluid">
        <div class="card" id="users-add">
          <div class="overlay" v-if="is_loading">
            <i class="fas fa-2x fa-sync-alt fa-spin"></i>
          </div>
          <form @submit.prevent="handleSubmission()" method="POST" novalidate>
            <div class="card-header">
              <h3 class="card-title">
                <span v-if="is_edit">Update</span><span v-else>Create</span>
              </h3>
              <div class="card-tools">
                <router-link class="btn btn-info" :to="{ name: 'Users' }">
                  <i class="fas fa-list"></i> List
                </router-link>
              </div>
            </div>
            <div class="card-body">
              <div class="form-row">
                <div class="form-group required col-md-6">
                  <label for="account_type" class="control-label"
                    >Account Type</label
                  >
                  <select
                    class="form-control"
                    name="account type"
                    v-bind:class="{ 'has-error': errors.has('account type') }"
                    v-validate="'required'"
                    id="account_type"
                    v-model="value.account_type"
                  >
                    <option value=""></option>
                    <option value="system">System</option>
                    <option value="business">Business</option>
                  </select>
                  <div
                    class="help text-danger"
                    v-show="errors.has('account type')"
                  >
                    {{ errors.first('account type') }}
                  </div>
                </div>

                <div class="form-group required col-md-6">
                  <label for="username" class="control-label">Username</label>
                  <input
                    autocomplete="off"
                    type="text"
                    id="username"
                    name="username"
                    v-model="value.username"
                    v-validate="'required'"
                    :class="{ 'has-error': errors.has('username') }"
                    class="form-control"
                    placeholder="Username"
                  />
                  <div class="help text-danger" v-show="errors.has('username')">
                    {{ errors.first('username') }}
                  </div>
                </div>
                <div
                  class="form-group col-md-12"
                  v-if="value.account_type === 'business'"
                >
                  <label for="parent" class="control-label">Parent</label>
                  <multiselect
                    v-model="value.parent_id"
                    id="parent"
                    name="parent"
                    label="name"
                    value="id"
                    track-by="name"
                    placeholder="Type to search"
                    open-direction="bottom"
                    :multiple="false"
                    :options="pre.parents.map((parent) => parent.id)"
                    :custom-label="
                      (opt) => pre.parents.find((x) => x.id == opt).name
                    "
                    :searchable="true"
                    :loading="isSelectorLoading"
                    :internal-search="false"
                    :clear-on-select="true"
                    :close-on-select="true"
                    :options-limit="300"
                    :limit="3"
                    :max-height="600"
                    :show-no-results="false"
                    :hide-selected="true"
                    :class="{ 'has-error': errors.has('parent') }"
                    @search-change="getParents"
                  >
                  </multiselect>
                  <div class="help text-danger" v-show="errors.has('parent')">
                    {{ errors.first('parent') }}
                  </div>
                </div>

                <div class="form-group required col-md-6">
                  <label for="name" class="control-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    v-model="value.name"
                    class="form-control"
                    :class="{ 'has-error': errors.has('name') }"
                    v-validate="'required'"
                    placeholder="Name"
                  />
                  <div class="help text-danger" v-show="errors.has('name')">
                    {{ errors.first('name') }}
                  </div>
                </div>
                <div class="form-group col-md-6">
                  <label for="mobile_no" class="control-label"
                    >Mobile No.</label
                  >
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"
                        ><i class="fas fa-phone"></i
                      ></span>
                    </div>
                    <input
                      type="text"
                      id="mobile_no"
                      class="form-control"
                      name="mobile_no"
                      placeholder="Mobile No"
                      :class="{ 'has-error': errors.has('mobile_no') }"
                      v-model="value.mobile_no"
                    />
                  </div>
                  <div
                    class="help text-danger"
                    v-show="errors.has('mobile_no')"
                  >
                    {{ errors.first('mobile_no') }}
                  </div>
                </div>
                <div class="form-group required col-md-12">
                  <label for="email" class="control-label">Email</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"
                        ><i class="fas fa-envelope"></i
                      ></span>
                    </div>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      v-model="value.email"
                      v-validate="'required|email'"
                      class="form-control"
                      :class="{ 'has-error': errors.has('email') }"
                      placeholder="Email"
                    />
                  </div>
                  <small class="form-text text-muted">
                    <i class="fa fa-info-circle"></i>&nbsp;We'll never share
                    your email with anyone else.
                  </small>
                  <div class="help text-danger" v-show="errors.has('email')">
                    {{ errors.first('email') }}
                  </div>
                </div>
                <div class="col-md-12">
                  <h4 class="site-heading my-3"><span>Avatar</span></h4>
                </div>
                <div class="form-group col-md-12">
                  <label for="avatar"></label>
                  <div class="row align-items-center">
                    <div class="col-4">
                      <div class="input-group">
                        <div class="custom-file">
                          <input
                            type="file"
                            name="avatar"
                            class="custom-file-input"
                            id="avatar"
                            @change="selectFile"
                          />
                          <label class="custom-file-label" for="avatar"
                            >Choose file</label
                          >
                        </div>
                      </div>
                    </div>
                    <div class="col-8">
                      <img
                        alt="preview image"
                        v-if="temp_avatar"
                        v-bind:src="temp_avatar"
                        width="100"
                        height="100"
                        class="img-circle"
                      />
                    </div>
                    <div class="help text-danger" v-show="errors.has('avatar')">
                      {{ errors.first('avatar') }}
                    </div>
                  </div>
                </div>
                <div class="form-group required col-md-6">
                  <label for="organization" class="control-label"
                    >Organization</label
                  >
                  <multiselect
                    v-model="value.organization_id"
                    :options="pre.organizations.map((org) => org.id)"
                    :custom-label="
                      (opt) =>
                        pre.organizations.find((x) => x.id == opt).org_name
                    "
                    placeholder="Pick Organization"
                    :searchable="true"
                    :multiple="false"
                    :class="{ 'has-error': errors.has('organization') }"
                    id="organization"
                    v-validate="'required'"
                    name="organization"
                  >
                  </multiselect>
                  <div
                    class="help text-danger"
                    v-show="errors.has('organization')"
                  >
                    {{ errors.first('organization') }}
                  </div>
                </div>
                <div class="form-group required col-md-6">
                  <label for="department" class="control-label"
                    >Department</label
                  >
                  <multiselect
                    v-model="value.department_id"
                    :options="pre.departments.map((dept) => dept.id)"
                    :custom-label="
                      (opt) => pre.departments.find((x) => x.id == opt).name
                    "
                    placeholder="Pick Department"
                    :searchable="true"
                    :multiple="false"
                    v-validate="'required'"
                    class="department_id"
                    :class="{ 'has-error': errors.has('department_id') }"
                    id="department"
                    name="department_id"
                  >
                  </multiselect>
                  <div
                    class="help text-danger"
                    v-show="errors.has('department_id')"
                  >
                    {{ errors.first('department_id') }}
                  </div>
                </div>
                <div class="form-group required col-md-6" v-if="!is_edit">
                  <label for="password" class="control-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    v-model="value.password"
                    class="form-control"
                    :class="{ 'has-error': errors.has('password') }"
                    placeholder="password"
                  />
                  <div class="help text-danger" v-show="errors.has('password')">
                    {{ errors.first('password') }}
                  </div>
                </div>
                <div class="form-group required col-md-6" v-if="!is_edit">
                  <label for="password_confirmation" class="control-label"
                    >Confirm Password</label
                  >
                  <input
                    type="password"
                    id="password_confirmation"
                    name="confirm password"
                    v-model="value.password_confirmation"
                    class="form-control"
                    :class="{ 'has-error': errors.has('confirm password') }"
                    placeholder="Confirm Password"
                  />
                  <div
                    class="help text-danger"
                    v-show="errors.has('confirm password')"
                  >
                    {{ errors.first('confirm password') }}
                  </div>
                </div>
                <div class="form-group col-md-6">
                  <label for="roles" class="control-label">Roles</label>
                  <multiselect
                    track-by="name"
                    id="roles"
                    name="roles"
                    label="name"
                    v-model="value.roles"
                    value="id"
                    :options="pre.roles"
                    :searchable="true"
                    :multiple="true"
                    :close-on-select="true"
                    :show-labels="false"
                    :class="{ 'has-error': errors.has('roles') }"
                    placeholder="Pick a value"
                  ></multiselect>
                  <div class="help text-danger" v-show="errors.has('roles')">
                    {{ errors.first('roles') }}
                  </div>
                </div>
                <div class="form-group col-md-6">
                  <label for="permissions" class="control-label"
                    >Permissions</label
                  >
                  <multiselect
                    track-by="name"
                    id="permissions"
                    label="name"
                    v-model="value.permissions"
                    value="id"
                    :options="pre.permissions"
                    :searchable="true"
                    :multiple="true"
                    :close-on-select="true"
                    name="permissions"
                    :class="{ 'has-error': errors.has('permissions') }"
                    :show-labels="false"
                    placeholder="Pick a value"
                  ></multiselect>
                  <div
                    class="help text-danger"
                    v-show="errors.has('permissions')"
                  >
                    {{ errors.first('permissions') }}
                  </div>
                </div>
                <div class="form-group required col-md-6">
                  <label for="active_status" class="control-label"
                    >Status</label
                  >
                  <select
                    class="form-control"
                    style="width: 100%"
                    :class="{ 'has-error': errors.has('active_status') }"
                    v-validate="'required'"
                    name="active_status"
                    id="active_status"
                    v-model="value.active_status"
                  >
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                  </select>
                  <div
                    class="help text-danger"
                    v-show="errors.has('active_status')"
                  >
                    {{ errors.first('active_status') }}
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <button type="submit" v-if="!is_edit" class="btn btn-site">
                Submit
              </button>
              <button type="submit" v-if="is_edit" class="btn btn-site">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import { CommonAPI, UserAPI } from '@/services/api'
import { Notification } from 'element-ui'

export default {
  name: 'UserForm',
  metaInfo: {
    title: 'User Form | Dotlines',
  },
  data: () => ({
    list: [],
    pre: {
      roles: [],
      permissions: [],
      organizations: [],
      departments: [],
      parents: [],
    },
    params: '',
    value: {
      account_type: 'system',
      parent_id: '',
    },
    is_edit: false,
    temp_avatar: '',
    isSelectorLoading: false,
    is_loading: false,
  }),
  mounted: function () {
    this.getData()
  },
  methods: {
    async getData() {
      const _this = this
      _this.params = _this.$route.params
      _this.is_loading = true
      if (!_.isEmpty(_this.params) && _this.params.id !== undefined) {
        _this.is_edit = true
      }

      await CommonAPI.getAllOrganizations().then((organizations) => {
        _this.pre.organizations = organizations
      })
      await CommonAPI.getDepartment().then((departments) => {
        _this.pre.departments = departments
      })
      await CommonAPI.getPermissions().then((permissions) => {
        _this.pre.permissions = permissions
      })
      await CommonAPI.getRoles().then((roles) => {
        _this.pre.roles = roles
      })

      if (_this.is_edit) {
        await _this.getUserDetail(_this.params.id)
      }
      _this.is_loading = false
    },
    getUserDetail(id) {
      return new Promise((resolve) => {
        const _this = this
        UserAPI.getUser(id)
          .then((response) => {
            if (
              !_.isEmpty(response.parent) &&
              typeof response.parent !== undefined
            ) {
              _this.pre.parents[0] = response.parent
            } else {
              _this.pre.parents = [{ id: 1, name: 'Search' }]
            }
            _this.value = response
            _this.temp_avatar = _this.value.avatar
            _this.$delete(_this.value, 'avatar')
            resolve('resolved')
          })
          .catch((error) => {
            console.log('error ' + error)
            resolve('rejected')
          })
      })
    },
    handleSubmission() {
      const _this = this
      _this.$validator.validateAll().then((result) => {
        if (result) {
          _this.is_loading = true
          // eslint-disable-next-line camelcase
          let api_url = '/admin_users'
          let method = 'POST'
          if (_this.is_edit) {
            // eslint-disable-next-line camelcase
            api_url = '/admin_users/' + _this.$route.params.id
            method = 'PUT'
          }
          axios({
            method: method,
            url: api_url,
            data: _this.value,
            headers: { 'Content-Type': 'application/json' },
          })
            .then(function (response) {
              // _this.$toaster.success(response.data.message)
              Notification.success({
                title: 'Success',
                message: response.message,
              })
              _this.is_loading = false
              _this.$router.push({ name: 'Users' })
            })
            .catch((errors) => {
              _this.$setErrorsFromResponse(errors.response.data)
            })
            .finally(() => {
              _this.is_loading = false
            })
        }
      })
    },
    selectFile: function (event) {
      // `files` is always an array because the file input may be in multiple mode
      /* const reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = () => {
        this.value.avatar = reader.result
        this.temp_avatar = reader.result
      } */
    },
    async getParents(query) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const _this = this
      if (query.length >= 2) {
        _this.isSelectorLoading = true
        // eslint-disable-next-line camelcase
        const api_url = '/all-users?q=' + query
        await axios
          .get(api_url)
          .then((response) => {
            _this.pre.parents = response.data
          })
          .catch((error) => {
            console.log('error ' + error.response)
          })
          .finally(() => {
            _this.isSelectorLoading = false
          })
      }
    },
  },
}
</script>
