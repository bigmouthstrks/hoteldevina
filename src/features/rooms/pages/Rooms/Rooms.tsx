import { FC } from 'react';
import ReservationSection from '@reservations/components/Reservations/Reservations';
import OffersSection from '@core/components/Offers/Offers';
import AvailabilityForm from '@core/components/Availability/Availability';
import RoomsSection from '@rooms/components/Rooms/Rooms';

const Rooms: FC = () => {
  return (
    <>
      <AvailabilityForm />
      <RoomsSection />
      <OffersSection />
      <ReservationSection />
    </>
  );
};

export default Rooms;
