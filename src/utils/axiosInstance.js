import axios from "axios";
import { SHIVAM_INGALE_BACKEND_URL } from './config';

const axiosInstance = axios.create({
    baseURL: SHIVAM_INGALE_BACKEND_URL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("jwtToken");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem("jwtToken");
            // Clear user data via dispatch in your component
            // This will be handled in the component where you dispatch actions
        }
        return Promise.reject(error || "Something went wrong");
    }
);

export default axiosInstance;
