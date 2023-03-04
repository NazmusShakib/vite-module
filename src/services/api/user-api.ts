import axios from 'axios'

export default {
  getUsers: function (query = null) {
    return new Promise((resolve) => {
      axios
        .get('/admin_users', {
          params: query,
        })
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          resolve(error)
        })
    })
  },
  getUser: function (id = null) {
    return new Promise((resolve) => {
      axios
        .get('/admin_users/' + id)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          resolve(error)
        })
    })
  },
  deleteUser: function (id = null) {
    return new Promise((resolve) => {
      axios
        .delete('/admin_users/' + id)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          resolve(error)
        })
    })
  },
}
