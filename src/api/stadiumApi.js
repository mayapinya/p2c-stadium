import axios from '../config/axios';
import axiosAdmin from '../config/axiosAdmin';

// export const register = (input) => axios.post('/auth/register', input);
// export const login = ({ emailOrMobile, password }) =>
//   axios.post('/auth/login', { emailOrMobile, password });

export const getStadiumList = () => axios.get('/stadium/list');
export const getStadium = (id) => axios.get(`/stadium/detail/${id}}`);

export const getStadiumAll = () => axiosAdmin.get('/stadium/all');
export const createStadium = (input) =>
  axiosAdmin.post(`/stadium/create-admin/`, input);
export const updateStadium = (input) =>
  axiosAdmin.patch(`/stadium/update-admin/`, input);
export const updateStatusStadium = (input) =>
  axiosAdmin.patch(`/stadium/update-status/`, input);
