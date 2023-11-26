import api from "..";
import { apiUrl } from "../../utils/constants";

export const GetAllMedia = (params) => api.get(`${apiUrl?.media}`, { params });
