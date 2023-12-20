import api from "..";
import { apiUrl } from "../../utils/constants";

export const GetAllBlogs = (params) => api.get(`${apiUrl?.blogs}`, { params });
export const CreateBlogs = async (data) => await api.post(`${apiUrl.blogs}`, data)
