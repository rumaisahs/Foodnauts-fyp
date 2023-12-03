import api from "../index";
import { apiUrl, constant } from "../../utils/constants";

// export const GetAllAmbience = (params) => api.get(`${apiUrl.ambience}/`, {params})
export const GetAllAmbience = async (params) => await api.get(`${apiUrl.ambience}`, { params })