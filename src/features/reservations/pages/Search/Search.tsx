import { FC, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { SearchResult } from '@models/reservation';
import { useFetch } from '@shared/hooks';
import { AvailabilityForm } from '@core/components';
import { SearchItem } from '@reservations/components';
import { AdminProps } from '@models/props';
import { API_URL } from '@models/consts';
import { useReservation } from '@reservations/hooks';
import { ReservationDetails } from '../ReservationDetails';

export const Search: FC<AdminProps> = ({ isAdminMode }) => {
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(null);
  const location = useLocation();
  const { post } = useFetch();
  const { reservation, setReservation } = useReservation();
  const queryParams = new URLSearchParams(location.search);
  const checkIn = queryParams.get('checkin');
  const checkOut = queryParams.get('checkout');
  const passengerNumber = Number(queryParams.get('adults'));
  useEffect(() => {
    setReservation(null);
    post(`${API_URL}/reservations/simulate`, { checkIn, checkOut, passengerNumber }).then(
      ({ data }) => {
        setSearchResults(data);
      }
    );
    console.log({ reservation, isAdminMode });
  }, [checkIn, checkOut, passengerNumber]);
  /*const searchResults: SearchResult[] = [
    {
      id: 1,
      checkIn: '13/01/2025',
      checkOut: '15/01/2025',
      nightsCount: 2,
      totalPrice: 360000,
      passengerNumber: 3,
      rooms: [
        {
          roomId: 1,
          description: 'Habitación Doble',
          image: { src: '/images/habitacion doble .JPG', alt: 'uno jej' },
          price: '1000',
        },
        {
          roomId: 2,
          description: 'Suite Premium',
          image: { src: '/images/habitacion doble .JPG', alt: 'uno jej' },
          price: '1000',
        },
      ],
    },
    {
      id: 2,
      checkIn: '20/02/2025',
      checkOut: '25/02/2025',
      nightsCount: 5,
      totalPrice: 750000,
      passengerNumber: 2,
      rooms: [
        {
          roomId: 3,
          description: 'Habitación Individual',
          image: { src: '/images/habitacion doble .JPG', alt: 'uno jej' },
          price: '1000',
        },
      ],
    },
    {
      id: 3,
      checkIn: '10/03/2025',
      checkOut: '12/03/2025',
      nightsCount: 2,
      totalPrice: 400000,
      passengerNumber: 4,
      rooms: [
        {
          roomId: 4,
          description: 'Habitación Familiar',
          image: { src: '/images/baño.JPG', alt: 'baño 1' },
          price: '1100',
        },
        {
          roomId: 5,
          description: 'Habitación Triple',
          image: { src: '/images/baño.JPG', alt: 'baño 2' },
          price: '1000',
        },
      ],
    },
  ];*/
  return reservation && isAdminMode ? (
    <ReservationDetails checkingReservations checkIn />
  ) : (
    <>
      <AvailabilityForm isAdminMode={isAdminMode} />
      <Container className="d-flex flex-column align-items-center mt-5 pb-5 gap-5">
        {/* <TestimonialsSection /> */}
        {searchResults?.map((result, index) => <SearchItem searchResult={result} key={index} />)}
      </Container>
    </>
  );
};
