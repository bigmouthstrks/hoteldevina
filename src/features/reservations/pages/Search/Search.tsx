import { FC, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { SearchResult } from '@models/reservation';
import { useFetch } from '@shared/hooks';
import { AvailabilityForm } from '@core/components';
import { SearchItem } from '@reservations/components';
import { AvailabilityProps } from '@models/props';
import { API_URL } from '@models/consts';
import { useReservation } from '@reservations/hooks';
import { ReservationDetails } from '../ReservationDetails';

export const Search: FC<AvailabilityProps> = ({ isAdminMode, forGroups }) => {
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(null);
  const location = useLocation();
  const { post } = useFetch();
  const { reservation, setReservation } = useReservation();
  const queryParams = new URLSearchParams(location.search);
  const checkIn = queryParams.get('checkin');
  const checkOut = queryParams.get('checkout');
  const passengerCount = Number(queryParams.get('adults'));
  useEffect(() => {
    setReservation(null);
    post(`${API_URL}/reservations/simulate`, { checkIn, checkOut, passengerCount }).then(
      ({ data }) => {
        setSearchResults(data);
      }
    );
  }, [checkIn, checkOut, passengerCount]);
  return reservation && isAdminMode ? (
    <ReservationDetails checkingReservations checkIn fullCheckIn />
  ) : (
    <>
      <AvailabilityForm isAdminMode={isAdminMode} forGroups={forGroups} />
      <Container className="d-flex flex-column align-items-center mt-5 pb-5 gap-5">
        {/* <TestimonialsSection /> */}
        {Number(searchResults?.length) > 0
          ? searchResults?.map((result, index) => (
              <SearchItem searchResult={result} key={index} isAdminMode={isAdminMode} />
            ))
          : 'No existen coincidencias para esta búsqueda. ❌'}
      </Container>
    </>
  );
};
