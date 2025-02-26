import { ProtectedRoute } from '@auth/components';
import { useAuth } from '@auth/hooks';
import { ChildrenProps } from '@models/props';
import { Loading } from '@shared/components';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedAdminRoute: FC<ChildrenProps> = ({ children }: ChildrenProps) => {
  const { isAdmin, loading } = useAuth();
  if (loading) return <Loading />;
  return <ProtectedRoute>{isAdmin ? children : <Navigate to="/" />}</ProtectedRoute>;
};
