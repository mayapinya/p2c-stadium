import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as authService from '../api/authApi';
import {
  addAccessTokenAdmin,
  getAccessTokenAdmin,
  removeAccessTokenAdmin
} from '../utils/localStorage';

const AuthAdminContext = createContext();

function AuthAdminContextProvider({ children }) {
  let navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (getAccessTokenAdmin()) {
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
    addAccessTokenAdmin(res.data.token);
    setTimeout(() => getProfile(), 1);
  };

  const login = async (input) => {
    const res = await authService.loginAdmin(input);
    addAccessTokenAdmin(res.data.token);
    await getProfile();
  };

  const logout = () => {
    setUser(null);
    removeAccessTokenAdmin();
    setTimeout(() => navigate(0), 500);
  };

  return (
    <AuthAdminContext.Provider
      value={{ user, register, login, logout, initialLoading }}
    >
      {children}
    </AuthAdminContext.Provider>
  );
}

export const useAuthAdmin = () => {
  return useContext(AuthAdminContext);
};

export default AuthAdminContextProvider;
