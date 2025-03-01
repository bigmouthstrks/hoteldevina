import { AvailabilityForm } from '@core/components';
import { ReservationSection } from '@reservations/components';
import { RoomDetailsSection } from '@rooms/components/RoomDetails/RoomDetails';
import { FC } from 'react';

export const RoomDetails: FC = () => {
  return (
    <>
      <RoomDetailsSection />
      <AvailabilityForm />
      <ReservationSection />
    </>
  );
};
