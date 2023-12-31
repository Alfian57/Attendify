import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://attendify-api.alfian-gading.com',
    headers: {'Content-Type': 'application/json'}
});

export default axiosInstance;