import { FC, useEffect, useState } from 'react';
import ReservationSection from '@components/Reservations/Reservations';
import { Container } from 'react-bootstrap';
import AvailabilityForm from '@components/Availability/Availability';
import { useLocation } from 'react-router-dom';
import useFetch from '@hooks/useFetch';
import { SearchResult } from '@models/reservation';
import SearchItem from '@components/SearchItem/SearchItem';

const Search: FC = () => {
  /*const [searchResults, setSearchResults] = useState(null);
  const { VITE_API_URL } = import.meta.env;
  const location = useLocation();
  const { post } = useFetch();
  const queryParams = new URLSearchParams(location.search);
  const checkIn = queryParams.get('checkin');
  const checkOut = queryParams.get('checkout');
  const passengerNumber = Number(queryParams.get('adults'));
  useEffect(() => {
    post(`${VITE_API_URL}/reservations/simulate`, { checkIn, checkOut, passengerNumber }).then(
      ({ data }) => {
        setSearchResults(data);
      }
    );
  }, [checkIn, checkOut, passengerNumber]);*/

  const searchResults: SearchResult[] = [
    {
      id: 1,
      checkInDate: '13/01/2025',
      checkOutDate: '15/01/2025',
      numberOfNights: 2,
      totalAmount: 360000,
      numberOfPassengers: 3,
      rooms: [
        {
          id: 1,
          description: 'Habitación Doble',
          image: { src: 'src/assets/images/habitacion doble .JPG', alt: 'uno jej' },
          price: '1000',
        },
        {
          id: 2,
          description: 'Suite Premium',
          image: { src: 'src/assets/images/habitacion doble .JPG', alt: 'uno jej' },
          price: '1000',
        },
      ],
    },
    {
      id: 2,
      checkInDate: '20/02/2025',
      checkOutDate: '25/02/2025',
      numberOfNights: 5,
      totalAmount: 750000,
      numberOfPassengers: 2,
      rooms: [
        {
          id: 3,
          description: 'Habitación Individual',
          image: { src: 'src/assets/images/habitacion doble .JPG', alt: 'uno jej' },
          price: '1000',
        },
      ],
    },
    {
      id: 3,
      checkInDate: '10/03/2025',
      checkOutDate: '12/03/2025',
      numberOfNights: 2,
      totalAmount: 400000,
      numberOfPassengers: 4,
      rooms: [
        {
          id: 4,
          description: 'Habitación Familiar',
          image: { src: '/src/assets/images/baño.JPG', alt: 'baño 1' },
          price: '1100',
        },
        {
          id: 5,
          description: 'Habitación Triple',
          image: { src: '/src/assets/images/baño.JPG', alt: 'baño 2' },
          price: '1000',
        },
      ],
    },
  ];
  return (
    <>
      <AvailabilityForm />
      <Container className="d-flex flex-column align-items-center mt-5 mb-5 gap-5">
        {/* <TestimonialsSection /> */}
        {searchResults.map((result) => (
          <SearchItem searchResult={result} />
        ))}
      </Container>
      <ReservationSection />
    </>
  );
};

export default Search;
