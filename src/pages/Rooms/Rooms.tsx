import React from 'react';
import ReservationSection from '@components/Reservations/Reservations';
import Offers from '@components/Offers/Offers';
import AvailabilityForm from '@components/Availability/Availability';
import RoomsList from '@components/RoomsList/RoomsList';
import { RoomData } from 'models/room';

const Rooms: React.FC = () => {
  const rooms: RoomData[] = [];
  return (
    <>
      <AvailabilityForm />
      <RoomsList rooms={rooms} />
      <Offers />
      <ReservationSection />
    </>
  );
};

export default Rooms;
