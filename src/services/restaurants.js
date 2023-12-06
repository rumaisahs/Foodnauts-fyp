import { apiUrl } from '../utils/constants'
import api from './index'

export const getAllRestaurants = async (params) => await api.get(`${apiUrl.restaurant}`, { params })
export const getSingleRestaurant = async (id) => await api.get(`${apiUrl.restaurant}/${id}`)

// cuisine
export const getSingleCuisine = async (id) => await api.get(`${apiUrl.cuisine}/${id}`)


// ambience
export const getSingleAmbiance = async (id) => await api.get(`${apiUrl.ambience}/${id}`)

// review
export const getSingleReview = async (id) => await api.get(`${apiUrl.review}/${id}`)
export const createReview = async (data) => await api.post(`${apiUrl.review}`, data)


// export const GetSingleUser = async (id) => await api.get(`${apiUrl.user}/${id}`)
export const UpdateUser = async (id, data) => await api.put(`${apiUrl.user}/${id}`, data)
export const DeleteUser = async (id) => await api.delete(`${apiUrl.user}/${id}`)