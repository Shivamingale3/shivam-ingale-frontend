import axios from "axios";

const accessToken = sessionStorage.getItem("token");
const CODING_ROOMIE_SERVER_URL = "http://localhost:8001";
const axiosInstance = axios.create({
    baseURL: CODING_ROOMIE_SERVER_URL,
    headers: { Authorization: `Bearer ${accessToken}`, },
});

axiosInstance.interceptors.response.use(
    response => response,
    error => Promise.reject(error || "Something went wrong"),
);

export default axiosInstance;
