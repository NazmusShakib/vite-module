import axios from 'axios'
import localStorage from '@/services/localStorage'

// require('dotenv').config({ path: '../../../../../.env' })

// Add api baseurl
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL

// Add a request interceptor
axios.interceptors.request.use(
  (request) => {
    const token = localStorage.get('token')
    if (token) {
      request.headers.Authorization = 'Bearer ' + token
    }
    return request
  },
  (error) => {
    return Promise.reject(error)
  }
)
