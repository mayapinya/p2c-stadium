import { createContext, useContext, useEffect, useState } from 'react';
import * as authService from '../api/authApi';
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken
} from '../utils/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (getAccessToken()) {
          await getProfile();
        }
      } catch (err) {
        console.log(err);
      } finally {
        setInitialLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const getProfile = async () => {
    const res = await authService.getProfile();
    setUser(res.data.user);
  };

  const register = async (input) => {
    const res = await authService.register(input);
    addAccessToken(res.data.token);
    setTimeout(() => getProfile(), 1);
  };

  const login = async (input) => {
    const res = await authService.login(input);
    addAccessToken(res.data.token);
    await getProfile();
  };

  const logout = () => {
    setUser(null);
    removeAccessToken();
  };

  return (
    <AuthContext.Provider
      value={{ user, register, login, logout, initialLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
