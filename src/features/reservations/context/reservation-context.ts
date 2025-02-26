import { Reservation } from '@models/reservation';
import { createContext } from 'react';

export interface ReservationContextType {
  reservation: Reservation | null;
  setReservation: React.Dispatch<React.SetStateAction<Reservation | null>>;
}

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

export default ReservationContext;
