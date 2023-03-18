import axios, {AxiosRequestConfig} from "axios";

const instance = axios.create({
    baseURL: "https://bilimplace.kz/api"
})

instance.interceptors.request.use((config) => {
    // @ts-ignore
    config.headers.Authorization = window.localStorage.getItem('token');
    return config;
});

export default instance