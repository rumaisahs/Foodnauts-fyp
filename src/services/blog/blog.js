import api from "..";
import { apiUrl } from "../../utils/constants";

export const GetAllBlogs = (params) => api.get(`${apiUrl?.blogs}`, { params });
