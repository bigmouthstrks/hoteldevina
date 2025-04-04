import { AvailabilityForm } from '@core/components';
import { ReservationSection } from '@reservations/components';
import { RoomsSection } from '@rooms/components';
import { FC } from 'react';

export const Rooms: FC = () => {
  return (
    <>
      <AvailabilityForm />
      <RoomsSection />
      <ReservationSection />
    </>
  );
};
