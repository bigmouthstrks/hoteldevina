import ProtectedRoute from '@auth/components/ProtectedRoute/ProtectedRoute';
import useAuth from '@auth/hooks/useAuth';
import { ChildrenProps } from '@models/props';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedAdminRoute: FC<ChildrenProps> = ({ children }: ChildrenProps) => {
  const { isAdmin } = useAuth();
  return <ProtectedRoute>{isAdmin ? children : <Navigate to="/" />}</ProtectedRoute>;
};

export default ProtectedAdminRoute;
