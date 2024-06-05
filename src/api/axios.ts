import axios from 'axios'

import { login } from '../utils/login'

const BASE_URL = 'http://localhost:8080'

export default axios.create({
  baseURL: BASE_URL,
})

const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
})

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error?.config
    if (error?.response?.status === 401 && !prevRequest?.sent) {
      prevRequest.sent = true
      try {
        await login()
        return axiosPrivate(prevRequest)
      } catch (error) {
        console.error('Login failed', error)
        return Promise.reject(error)
      }
    }
    return Promise.reject(error)
  }
)

export { BASE_URL, axiosPrivate }
