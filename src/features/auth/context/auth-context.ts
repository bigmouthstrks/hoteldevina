import { User } from '@models/user';
import { createContext } from 'react';

export interface AuthContextType {
  isAuthenticated: boolean;
  isAdmin: boolean;
  loading: boolean;
  login: (user: User) => Promise<void>;
  register: (user: User) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
