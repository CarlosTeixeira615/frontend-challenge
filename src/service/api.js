import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
})
const token =
  'BQAlPTyOyYp-X69PwuUefAUFFHsyfFg2Dw00U1PdXIOBfyfYRLo_0ug-gVt_AZVqtANqlOTOLv-tGvyl8rUnOG-NxIRZrd84J9NB_N7WQrq_U_VvJMZbO6RkD7uymxXR9j_Exm-aJfQeDnMw9ULPQ4flSunhQR2IFN4y6Ls'
api.defaults.headers.common['Authorization'] = `Bearer ${token}`

export default api
