import axios from 'axios'
import localStorage from '@/services/localStorage'

// Add a request interceptor
axios.defaults.baseURL = 'http://localhost:8000/api' //process.env.VUE_APP_API_BASE_URL

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
