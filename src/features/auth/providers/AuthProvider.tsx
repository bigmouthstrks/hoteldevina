import React, { useEffect, useState } from 'react';
import { User } from '@models/user';
import { jwtDecode } from 'jwt-decode';
import { useFetch } from '@shared/hooks';
import { AuthContext } from '@auth/context';
import { API_URL } from '@models/consts';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(Boolean(token));
  const [isAdmin, setIsAdmin] = useState<boolean>(true);
  const { post } = useFetch();

  useEffect(() => {
    const user: User | null = token ? jwtDecode(token) : null;
    setUser(user);
    setIsAdmin(user?.role === 'admin');
    setLoading(false);
  }, [token]);

  const login = async (user: User, isAdmin: boolean = false): Promise<void> => {
    const response = await post(`${API_URL}/auth/login`, { ...user, isAdmin });
    const { data } = response;
    localStorage.setItem('token', data.token);
    setIsAuthenticated(true);
    setIsAdmin(isAdmin);
    setToken(data.token);
  };

  const googleLogin = async (token: string) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
    setToken(token);
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
    <AuthContext.Provider
      value={{ isAuthenticated, isAdmin, user, login, googleLogin, logout, register, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
