import { Reservation } from '@models/reservation';
import { createContext } from 'react';

export interface ReservationContextType {
  reservation: Reservation | null;
  setReservation: React.Dispatch<React.SetStateAction<Reservation | null>>;
}

export const ReservationContext = createContext<ReservationContextType | undefined>(undefined);
