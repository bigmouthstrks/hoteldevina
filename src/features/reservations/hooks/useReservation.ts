import { ReservationContext } from '@reservations/context';
import { useContext } from 'react';

export const useReservation = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error('useReservation must be used within an ReservationProvider');
  }
  return context;
};
