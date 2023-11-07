import api from "../index";
import { apiUrl, constant } from "../../utils/constants";

export const GetAllAmbience = (params) => api.get(`${apiUrl.ambience}/`, {params})