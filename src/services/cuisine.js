import { apiUrl } from '../utils/constants'
import api from './index'

export const CreateCuisine = async (data) => await api.post(`${apiUrl.cuisine}`, data)
export const GetAllCuisine = async (params) => await api.get(`${apiUrl.cuisine}`, { params })
export const GetSingleCuisine = async (id) => await api.get(`${apiUrl.cuisine}/${id}`)
export const UpdateCuisine = async (id, data) => await api.put(`${apiUrl.cuisine}/${id}`, data)
export const DeleteCuisine = async (id) => await api.delete(`${apiUrl.cuisine}/${id}`)