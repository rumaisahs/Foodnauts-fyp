import axios from 'axios'
import { apiUrl } from '../utils/constants'
import api from './index'

export const UploadImage = async (data) => axios.post(apiUrl.uploadFile, data, {
    headers: {
        'Content-Type': 'multipart/form-data',
    },
})