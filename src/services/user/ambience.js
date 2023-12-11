import { apiUrl } from '../utils/constants'
import api from './index'

export const CreateAmbience = async (data) => await api.post(`${apiUrl.ambience}`, data)
export const GetAllAmbience = async (params) => await api.get(`${apiUrl.ambience}`, { params })
export const GetSingleAmbience = async (id) => await api.get(`${apiUrl.ambience}/${id}`)
export const UpdateAmbience = async (id, data) => await api.put(`${apiUrl.ambience}/${id}`, data)
export const DeleteAmbience = async (id) => await api.delete(`${apiUrl.ambience}/${id}`)