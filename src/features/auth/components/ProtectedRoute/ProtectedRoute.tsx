import useAuth from '@auth/hooks/useAuth';
import { ChildrenProps } from '@models/props';
import ReservationProvider from '@reservations/providers/ReservationProvider';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: FC<ChildrenProps> = ({ children }: ChildrenProps) => {
  const { isAuthenticated } = useAuth();
  return (
    <ReservationProvider>
      {isAuthenticated ? children : <Navigate to="/login" />}
    </ReservationProvider>
  );
};

export default ProtectedRoute;
