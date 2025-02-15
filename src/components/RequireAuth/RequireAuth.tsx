import useAuth from '@hooks/useAuth';
import { ChildrenProps } from '@models/props';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: FC<ChildrenProps> = ({ children }: ChildrenProps) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
