import { Reservation } from '@models/reservation';
import { createContext } from 'react';

export interface ReservationContextType {
  reservation: Reservation | null;
  modifyingReservation: boolean;
  checkingReservation: boolean;
  setReservation: React.Dispatch<React.SetStateAction<Reservation | null>>;
  setModifyingReservation: React.Dispatch<React.SetStateAction<boolean>>;
  setCheckingReservation: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ReservationContext = createContext<ReservationContextType | undefined>(undefined);
