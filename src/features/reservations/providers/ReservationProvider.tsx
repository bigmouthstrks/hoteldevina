import ReservationContext from '@reservations/context/reservation-context';
import { Reservation } from '@models/reservation';
import React, { useState } from 'react';

const ReservationProvider = ({ children }: { children: React.ReactNode }) => {
  const [reservation, setReservation] = useState<Reservation | null>(null);

  return (
    <ReservationContext.Provider value={{ reservation, setReservation }}>
      {children}
    </ReservationContext.Provider>
  );
};

export default ReservationProvider;
