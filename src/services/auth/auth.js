import api from "../index";
import { apiUrl, constant } from "../../utils/constants";

export const Signin = (data) => api.post(`${apiUrl.login}/`, data)
export const Register = (data) => api.post(`${apiUrl.signup}/`, data)
export const SocialLogin = (data) => api.post(`${apiUrl.socialLogin}/`, data)