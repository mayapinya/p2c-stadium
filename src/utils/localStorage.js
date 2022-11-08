const ACCESS_TOKEN = 'ACCESS_TOKEN';

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

export const addAccessToken = (token) =>
  localStorage.setItem(ACCESS_TOKEN, token);

export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);

// admin mode
const ACCESS_TOKEN_ADMIN = 'ACCESS_TOKEN_ADMIN';
export const getAccessTokenAdmin = () =>
  localStorage.getItem(ACCESS_TOKEN_ADMIN);
export const addAccessTokenAdmin = (token) =>
  localStorage.setItem(ACCESS_TOKEN_ADMIN, token);
export const removeAccessTokenAdmin = () =>
  localStorage.removeItem(ACCESS_TOKEN_ADMIN);
