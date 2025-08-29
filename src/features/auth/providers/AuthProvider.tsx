import React, { useEffect, useState } from 'react';
import { User } from '@models/user';
import { jwtDecode } from 'jwt-decode';
import { useFetch } from '@shared/hooks';
import { AuthContext } from '@auth/context';
import { API_URL } from '@models/consts';
import { useUtils } from '@shared/hooks/useUtils';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(Boolean(token));
  const [isAdmin, setIsAdmin] = useState<boolean>(true);
  const { post } = useFetch();
  const { encript } = useUtils();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const { exp } = JSON.parse(atob(token.split('.')[1]));
      const isExpired = Date.now() >= exp * 1000;
      if (isExpired) {
        logout();
      }
    }
  }, []);

  useEffect(() => {
    const user: User | null = token ? jwtDecode(token) : null;
    setUser(user);
    setIsAdmin(user?.role === 'admin');
    setLoading(false);
  }, [token]);

  const login = async (user: User): Promise<void> => {
    const response = await post(`${API_URL}/auth/login`, {
      ...user,
      password: encript(user.password ?? ''),
    });
    const { data } = response;
    localStorage.setItem('token', data.token);
    setIsAuthenticated(true);
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
      password: encript(user.password ?? ''),
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
