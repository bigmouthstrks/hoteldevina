import React from 'react';
import ReservationSection from '@components/Reservations/Reservations';
import OffersSection from '@components/Offers/Offers';
import AvailabilityForm from '@components/Availability/Availability';
import RoomsSection from '@components/Rooms/Rooms';

const Rooms: React.FC = () => {
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
