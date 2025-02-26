import { User } from '@models/user';
import { createContext } from 'react';

export interface AuthContextType {
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (user: User, isAdmin?: boolean) => Promise<void>;
  register: (user: User) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;
