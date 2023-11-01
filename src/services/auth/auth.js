import api from "../index";
import { apiUrl, constant } from "../../utils/constants";

export const Signin = (data) => api.post(`${apiUrl.login}/`, data)
export const Signup = (data) => api.post(`${apiUrl.signup}/`, data)
export const SocialLogin = (data) => api.post(`${apiUrl.socialLogin}/`, data)
// export const VerifyOtp = (data) => api.post(`${apiUrl.verify_otp}/`, data)
// export const ForgetPassword = (email) => api.post(`${apiUrl.forget_password}/`, email)
// export const ResetPassword = (data) => api.post(`${apiUrl.reset_password}/`, data)
// export const ChangePassword = (data) => api.post(`${apiUrl.change_password}/`, data)
// export const Logout = () => api.post(`${apiUrl.logout}/`)
