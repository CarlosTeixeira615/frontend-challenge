import axios from 'axios'
import { getToken } from 'utils'

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
})
const token = getToken()
api.defaults.headers.common['Authorization'] = `Bearer ${token}`

export default api
