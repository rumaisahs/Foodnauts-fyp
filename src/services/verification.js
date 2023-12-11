import {apiUrl} from '../utils/constants'
import api from './index'

export const getVerification = async (params) => api.get(`verification`, {params})
export const verifyUser = async (id, status) => api.post(`/verification-user/${id}`, {status})
export const getVerificationbyId = async (id) => api.get(`verification/${id}`)