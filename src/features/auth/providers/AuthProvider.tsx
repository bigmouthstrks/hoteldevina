import React, { useEffect, useState } from 'react';
import { User } from '@models/user';
import { jwtDecode } from 'jwt-decode';
import { useFetch } from '@shared/hooks';
import { AuthContext } from '@auth/context';
import { API_URL } from '@models/consts';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(Boolean(token));
  const [isAdmin, setIsAdmin] = useState<boolean>(true);
  const { post } = useFetch();

  useEffect(() => {
    const user: User | null = token ? jwtDecode(token) : null;
    setIsAdmin(user?.role === 'admin');
    setLoading(false);
  }, [token]);

  const login = async (user: User): Promise<void> => {
    const response = await post(`${API_URL}/auth/login`, user);
    const { data } = response;
    localStorage.setItem('token', data.token);
    setIsAuthenticated(true);
    setToken(data.token);
  };

  const register = async (user: User): Promise<void> => {
    const userWithRole = {
      ...user,
      role: 'user',
    };
    await post(`${API_URL}/auth/register`, userWithRole);
  };

  const logout = (): void => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAdmin, login, logout, register, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
