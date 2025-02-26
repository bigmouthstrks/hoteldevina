import { Reservation } from '@models/reservation';
import { ReservationContext } from '@reservations/context';
import React, { useState } from 'react';

export const ReservationProvider = ({ children }: { children: React.ReactNode }) => {
  const [reservation, setReservation] = useState<Reservation | null>(null);

  return (
    <ReservationContext.Provider value={{ reservation, setReservation }}>
      {children}
    </ReservationContext.Provider>
  );
};
