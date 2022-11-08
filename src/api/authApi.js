import axios from '../config/axios';

export const register = (input) => axios.post('/auth/register', input);
export const login = ({ emailOrMobile, password }) =>
  axios.post('/auth/login', { emailOrMobile, password });

export const loginAdmin = ({ emailOrMobile, password }) =>
  axios.post('/auth/login-admin', { emailOrMobile, password });

export const getProfile = () => axios.get('/auth/profile');
