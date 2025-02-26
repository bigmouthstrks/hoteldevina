import ReservationContext from '@reservations/context/reservation-context';
import { useContext } from 'react';

const useReservation = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error('useReservation must be used within an ReservationProvider');
  }
  return context;
};

export default useReservation;
