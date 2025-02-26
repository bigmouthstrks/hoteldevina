import AuthContext from '@auth/context/auth-context';
import useFetch from '@shared/hooks/useFetch';
import { User } from '@models/user';
import React, { useState } from 'react';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { VITE_API_URL } = import.meta.env;
  const logged = localStorage.getItem('token');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(Boolean(logged));
  const { post } = useFetch();

  const login = async (user: User) => {
    const response = await post(`${VITE_API_URL}/auth/login`, user);
    const { data } = response;
    localStorage.setItem('token', data.token);
    setIsAuthenticated(true);
  };

  const register = async (user: User) => {
    const userWithRole = {
      ...user,
      role: 'user',
    };
    await post(`${VITE_API_URL}/auth/register`, userWithRole);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
