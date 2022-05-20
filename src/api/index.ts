import axios, {AxiosRequestConfig} from "axios"
import {AuthResponse} from '../services/types/authResponse'

export const API_URL = process.env.REACT_APP_SERVER_URL

export const _api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

_api.interceptors.request.use((config: AxiosRequestConfig) => {
    if (config.headers === undefined) config.headers = {}
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

_api.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`,{withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            return _api.request(originalRequest);
        } catch (e) {
            console.log('not authorized')
        }
    }
    throw error;
})