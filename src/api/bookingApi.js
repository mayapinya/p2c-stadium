import axios from '../config/axios';

// export const register = (input) => axios.post('/auth/register', input);
// export const login = ({ emailOrMobile, password }) =>
//   axios.post('/auth/login', { emailOrMobile, password });

export const getBookingList = () => axios.get('/booking/list');
export const getBooking = (id) => axios.get(`/booking/detail/${id}}`);
export const getBookingSlot = (input) => axios.post(`/booking/slots/`, input);

export const booking = (input) => axios.post(`/booking/create`, input);
