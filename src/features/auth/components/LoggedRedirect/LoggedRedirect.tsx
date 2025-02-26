import { useAuth } from '@auth/hooks';
import { ChildrenProps } from '@models/props';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';

export const LoggedRedirect: FC<ChildrenProps> = ({ children }: ChildrenProps) => {
  const { isAuthenticated } = useAuth();
  return <>{!isAuthenticated ? children : <Navigate to="/" />}</>;
};
