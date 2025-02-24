import ReservationList from '@components/ReservationList/ReservationList';
import { RoomData } from '@models/room';
import React from 'react';

const MyReservations: React.FC = () => {
  const roomData: RoomData[] = [
    {
      id: 1,
      number: 101,
      isAvailable: true,
      price: '100',
      promotionPrice: 80,
      bedNumber: 2,
      roomTypeId: 1,
      image: { src: 'src/assets/images/img_1.jpg', alt: 'Room 101' },
      description: 'A cozy room with two beds.',
    },
    {
      id: 2,
      number: 102,
      isAvailable: false,
      price: '120',
      bedNumber: 1,
      roomTypeId: 2,
      image: { src: 'src/assets/images/img_1.jpg', alt: 'Room 102' },
      description: 'A luxurious room with a king-sized bed.',
    },
    {
      id: 3,
      number: 103,
      isAvailable: true,
      price: '90',
      promotionPrice: 70,
      bedNumber: 1,
      roomTypeId: 1,
      image: { src: 'src/assets/images/img_1.jpg', alt: 'Room 103' },
      description: 'A small room with a single bed.',
    },
    {
      id: 4,
      number: 104,
      isAvailable: true,
      price: '150',
      bedNumber: 3,
      roomTypeId: 3,
      image: { src: 'src/assets/images/img_1.jpg', alt: 'Room 104' },
      description: 'A spacious room with three beds.',
    },
    {
      id: 5,
      number: 105,
      isAvailable: false,
      price: '200',
      promotionPrice: 180,
      bedNumber: 2,
      roomTypeId: 2,
      image: { src: 'src/assets/images/img_1.jpg', alt: 'Room 105' },
      description: 'A deluxe room with modern amenities.',
    },
    {
      id: 6,
      number: 106,
      isAvailable: true,
      price: '110',
      bedNumber: 1,
      roomTypeId: 1,
      image: { src: 'src/assets/images/img_1.jpg', alt: 'Room 106' },
      description: 'A comfortable room with a single bed.',
    },
    {
      id: 7,
      number: 107,
      isAvailable: false,
      price: '130',
      bedNumber: 2,
      roomTypeId: 2,
      image: { src: 'src/assets/images/img_1.jpg', alt: 'Room 107' },
      description: 'A room with two beds and a great view.',
    },
    {
      id: 8,
      number: 108,
      isAvailable: true,
      price: '140',
      promotionPrice: 120,
      bedNumber: 1,
      roomTypeId: 3,
      image: { src: 'src/assets/images/img_1.jpg', alt: 'Room 108' },
      description: 'A luxurious room with a king-sized bed and a balcony.',
    },
    {
      id: 9,
      number: 109,
      isAvailable: true,
      price: '160',
      bedNumber: 2,
      roomTypeId: 2,
      image: { src: 'src/assets/images/img_1.jpg', alt: 'Room 109' },
      description: 'A spacious room with two beds and a modern bathroom.',
    },
    {
      id: 10,
      number: 110,
      isAvailable: false,
      price: '180',
      bedNumber: 3,
      roomTypeId: 3,
      image: { src: 'src/assets/images/img_1.jpg', alt: 'Room 110' },
      description: 'A large room with three beds and a living area.',
    },
  ];
  return (
    <div>
      <h1>My Reservations</h1>
      <ReservationList rooms={roomData} />
    </div>
  );
};

export default MyReservations;
