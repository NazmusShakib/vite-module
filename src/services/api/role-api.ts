import axios from 'axios'

export default {
  index(query: any = null, is_paginate = true) {
    return new Promise((resolve, reject) => {
      axios
        .get('admin-roles', {
          params: query,
        })
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  store(payload: any) {
    return axios
      .post('admin-roles', payload)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        throw error.response
      })
  },
  show(id: any) {
    return axios
      .get('admin-roles/' + id)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        throw error.response
      })
  },
  update(id: any, payload: any) {
    return axios
      .put('admin-roles/' + id, payload)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        throw error.response
      })
  },
  destroy(id: any) {
    return axios
      .delete('admin-roles/' + id)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        throw error.response
      })
  },
}
