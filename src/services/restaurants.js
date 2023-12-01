import { apiUrl } from '../utils/constants'
import api from './index'

export const getAllRestaurants = async (params) => await api.get(`${apiUrl.restaurant}`, { params })

export const CreateUser = async (data) => await api.post(`${apiUrl.user}`, data)
export const GetSingleUser = async (id) => await api.get(`${apiUrl.user}/${id}`)
export const UpdateUser = async (id, data) => await api.put(`${apiUrl.user}/${id}`, data)
export const DeleteUser = async (id) => await api.delete(`${apiUrl.user}/${id}`)