import axios from 'axios';
import {
  getAccessTokenAdmin,
  removeAccessTokenAdmin
} from '../utils/localStorage';
import { API_ENDPOINT_URL } from './env';

const axiosAdmin = axios;

axiosAdmin.defaults.baseURL = API_ENDPOINT_URL;

axiosAdmin.interceptors.request.use(
  (config) => {
    const token = getAccessTokenAdmin();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

axiosAdmin.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response.status === 401) {
      removeAccessTokenAdmin();
      return window.location.replace('/admin');
    }
    return Promise.reject(err);
  }
);

export default axiosAdmin;
