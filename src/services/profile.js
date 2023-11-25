import api from ".";
import { apiUrl } from "../utils/constants";

export const getAllBlogs = (params) => api.get(`${apiUrl?.blogs}`, { params });
