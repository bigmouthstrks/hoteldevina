import { Reservation } from '@models/reservation';
import { ReservationContext } from '@reservations/context';
import React, { useState } from 'react';

export const ReservationProvider = ({ children }: { children: React.ReactNode }) => {
  const [reservation, setReservation] = useState<Reservation | null>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [checkingReservation, setCheckingReservation] = useState<boolean>(false);
  const [modifyingReservation, setModifyingReservation] = useState<boolean>(false);

  return (
    <ReservationContext.Provider
      value={{
        totalPrice,
        setTotalPrice,
        reservation,
        setReservation,
        checkingReservation,
        setCheckingReservation,
        modifyingReservation,
        setModifyingReservation,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};
