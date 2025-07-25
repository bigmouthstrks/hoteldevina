import { Button, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Room } from '@models/room';
import styles from './ReservationMap.module.scss';
import { API_URL, MessageType } from '@models/consts';
import { useFetch, useSnackbar } from '@shared/hooks';
import { CalendarForm } from '@shared/components';
import { useLocation } from 'react-router';
import { useReservation } from '@reservations/hooks';
import { ReservationDetails } from '@reservations/pages';

export const ReservationMap = () => {
  const { reservation, setReservation } = useReservation();
  const { get, post, put } = useFetch();
  const { showSnackbar } = useSnackbar();
  const [rooms, setRooms] = useState<Record<number, Room[]>>({});
  const [selectedRooms, setSelectedRooms] = useState<Room[]>([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const checkIn = queryParams.get('checkin');
  const checkOut = queryParams.get('checkout');

  useEffect(() => {
    if (!checkIn || !checkOut) return;
    get(`${API_URL}/rooms?checkIn=${checkIn || ''}&checkOut=${checkOut || ''}`)
      .then(({ data }: { data: Room[] }) => {
        setSelectedRooms([]);
        const roomsByNumber = [...data].sort(
          (a, b) => Number(a.number || 0) - Number(b.number || 0)
        );

        const roomsByFloor = roomsByNumber.reduce<Record<number, Room[]>>((acc, room) => {
          if (!room.number) return acc;
          const floor = Math.floor(room.number / 10);
          if (!acc[floor]) {
            acc[floor] = [];
          }
          acc[floor].push(room);
          return acc;
        }, {});

        setRooms(roomsByFloor);
      })
      .catch(() => {
        console.log('Error al obtener las habitaciones');
      });
  }, [checkIn, checkOut]);

  const handleRoomClick = (room: Room) => {
    const isUnavailable = !room.isAvailable;
    if (isUnavailable) return;
    const isSelected = selectedRooms.some((r) => r.roomId === room.roomId);
    if (isSelected) {
      // Deselecciona
      setSelectedRooms((prev) => prev.filter((r) => r.roomId !== room.roomId));
    } else {
      // Selecciona
      setSelectedRooms((prev) => [...prev, room]);
    }
  };

  const handleSubmit = () => {
    if (selectedRooms.length === 0 || !checkIn || !checkOut) {
      console.warn('No hay habitaciones seleccionadas para reservar.');
      return;
    }
    post(`${API_URL}/reservations/rooms-simulate`, {
      checkIn,
      checkOut,
      rooms: selectedRooms,
    })
      .then(({ data }) => {
        setReservation(data);
        setSelectedRooms([]);
      })
      .catch((error) => {
        console.error('Error fetching available rooms:', error);
      });
  };

  const handleLockRooms = (lock: boolean) => {
    if (selectedRooms.length === 0) {
      console.warn('No hay habitaciones seleccionadas para bloquear.');
      return;
    }
    put(`${API_URL}/rooms/lock`, {
      rooms: selectedRooms,
      lock,
    })
      .then(({ data, message }) => {
        setRooms((prev) => {
          const newRooms = { ...prev };
          for (const room of data) {
            const floor = Math.floor(room.number / 10);
            newRooms[floor] = newRooms[floor].map((r) => (r.number === room.number ? room : r));
          }
          return newRooms;
        });
        setSelectedRooms([]);
        showSnackbar(message, MessageType.SUCCESS);
      })
      .catch((error) => {
        showSnackbar(error.message, MessageType.ERROR);
      });
  };

  if (reservation) {
    return <ReservationDetails checkingReservations checkIn fullCheckIn />;
  }

  return (
    <>
      <Container fluid className={styles.optionMenu}>
        <Row className={styles.section}>
          <CalendarForm forRooms />
        </Row>
        <Row xs={5} className={`${styles.section} justify-content-center gap-3`}>
          <Button
            variant="secondary"
            onClick={handleSubmit}
            disabled={Boolean(
              (selectedRooms.length === 0 && checkIn && checkOut) ||
                selectedRooms.some((r) => r.isLocked)
            )}
          >
            Reservar seleccionadas
          </Button>
          <Button
            variant="info"
            onClick={() => handleLockRooms(true)}
            disabled={Boolean(selectedRooms.every((r) => r.isLocked))}
          >
            Bloquear seleccionadas
          </Button>
          <Button
            variant="info"
            onClick={() => handleLockRooms(false)}
            disabled={Boolean(selectedRooms.every((r) => !r.isLocked))}
          >
            Desbloquear seleccionadas
          </Button>
          <Button variant="primary" onClick={() => setSelectedRooms([])}>
            Quitar selección
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              const allAvailableRooms = Object.values(rooms)
                .flat()
                .filter((r) => r.isAvailable);
              setSelectedRooms(allAvailableRooms);
            }}
          >
            Seleccionar todas
          </Button>
        </Row>
      </Container>
      <Container className={styles.reservationMap}>
        <h1 className="mb-4">Mapa de Habitaciones</h1>
        <Row className={styles.section}>
          {Object.entries(rooms)
            .sort(([a], [b]) => Number(a) - Number(b))
            .map(([floor, floorRooms]) => (
              <div key={`floor-${floor}`} className={styles.floorContainer}>
                <h2 className={styles.floorHeader}>Piso {floor}</h2>
                <div className={styles.roomGrid}>
                  {floorRooms.map((room) => {
                    const roomType = room.roomType.name?.split(' ')[1].toLowerCase() || 'standard';

                    return (
                      <div
                        key={room.roomId}
                        className={`${styles.roomCard} ${styles[roomType]} ${
                          room.isAvailable ? styles.available : styles.unavailable
                        } ${
                          room.isLocked ? styles.locked : ''
                        } ${selectedRooms.some((r) => r.roomId === room.roomId) ? styles.selected : ''}`}
                        onClick={() => handleRoomClick(room)}
                      >
                        <div className={styles.roomNumber}>{room.number}</div>
                        <div className={styles.roomType}>{room.roomType.name}</div>
                        {!room.isAvailable && <div className={styles.unavailableText}>Ocupada</div>}
                        {room.isLocked && <div className={styles.lockedText}>Bloqueada</div>}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

          <div className={styles.legend}>
            <h5>Leyenda:</h5>
            <div className={styles.legendItems}>
              <div className={styles.legendItem}>
                <div className={`${styles.legendColorBox} ${styles.triple}`}></div>
                <span>Triple</span>
              </div>
              <div className={styles.legendItem}>
                <div className={`${styles.legendColorBox} ${styles.doble}`}></div>
                <span>Doble</span>
              </div>
              <div className={styles.legendItem}>
                <div className={`${styles.legendColorBox} ${styles.matrimonial}`}></div>
                <span>Matrimonial</span>
              </div>
              <div className={styles.legendItem}>
                <div className={`${styles.legendColorBox} ${styles.available}`}></div>
                <span>Disponible</span>
              </div>
              <div className={styles.legendItem}>
                <div className={`${styles.legendColorBox} ${styles.unavailable}`}></div>
                <span>Ocupada</span>
              </div>
              <div className={styles.legendItem}>
                <div className={`${styles.legendColorBox} ${styles.locked}`}></div>
                <span>Bloqueada</span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};
