import { useAuth } from '@auth/hooks';
import { ChildrenProps } from '@models/props';
import { FC } from 'react';
import { Navigate } from 'react-router';

export const ProtectedRoute: FC<ChildrenProps> = ({ children }: ChildrenProps) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};
