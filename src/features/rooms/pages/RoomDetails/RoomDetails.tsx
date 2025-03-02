import { AvailabilityForm } from '@core/components';
import { ReservationSection } from '@reservations/components';
import { RoomDetailsSection } from '@rooms/components/RoomDetails/RoomDetails';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

export const RoomDetails: FC = () => {
  const { id } = useParams();

  if (!id) {
    return (
      <>
        <RoomDetailsSection id={'1'} />
        <AvailabilityForm />
        <ReservationSection />
      </>
    );
  }

  return (
    <>
      <RoomDetailsSection id={id} />
      <AvailabilityForm />
      <ReservationSection />
    </>
  );
};
