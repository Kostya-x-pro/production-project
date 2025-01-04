import { LOCAL_STORAGE_THEME_KEY } from 'app/providers/ThemeProvider/lib/ThemeContext';
import axios from 'axios';

const baseURL = __IS_DEV__ ? 'http://localhost:8000' : 'https://production.ru';

export const $api = axios.create({
    baseURL,
    headers: {
        authorization: localStorage.getItem(LOCAL_STORAGE_THEME_KEY),
    },
});
