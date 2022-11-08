import axios from '../config/axios';

import axiosAdmin from '../config/axiosAdmin';

export const getBookingList = () => axios.get('/booking/list');
export const getBookingAllList = () => axiosAdmin.get('/booking/all');
export const getBooking = (id) => axios.get(`/booking/detail/${id}}`);
export const getBookingSlot = (input) => axios.post(`/booking/slots/`, input);
export const saveBooking = (input) => axios.post(`/booking/create/`, input);
export const cancelBooking = (input) => axios.patch(`/booking/cancel/`, input);
export const updateBookingStatus = (input) =>
  axiosAdmin.patch(`/booking/status/`, input);
