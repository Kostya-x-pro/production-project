import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

export const $api = axios.create({
    baseURL: __API__,
    withCredentials: true,
});

$api.interceptors.request.use((config) => {
    if (config.headers) {
        const token = localStorage.getItem(USER_LOCALSTORAGE_KEY);
        config.headers.Authorization = token || '';
    }
    return config;
});
