import { apiUrl } from '../utils/constants'
import api from './index'
export const searchRestaurants = async (params) => await api.get(`${apiUrl.restaurant}`, { params })