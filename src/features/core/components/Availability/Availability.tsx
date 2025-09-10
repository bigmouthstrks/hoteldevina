import { FC, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Availability.module.scss';
import { useTitle } from '@shared/hooks';
import { AvailabilityProps } from '@models/props';
import { CalendarForm } from '@shared/components';

export const AvailabilityForm: FC<AvailabilityProps> = ({ isAdminMode, forGroups, forRooms }) => {
  const { setTitle } = useTitle();

  useEffect(() => {
    if (isAdminMode) setTitle('Realizar una nueva reserva');
  }, [isAdminMode]);

  return (
    <section
      className={`${styles.availabilitySection} ${isAdminMode ? styles.admin : ''} ${forRooms ? styles.forRooms : ''}`}
    >
      <Container>
        <Row>
          <Col>
            <div
              className={`${styles.availabilityForm} p-4 rounded shadow`}
              data-aos="fade-up"
              data-aos-offset="-200"
            >
              {!forRooms && <h2 className="text-center">Cotice su estadía aquí</h2>}
              <br />
              <CalendarForm isAdminMode={isAdminMode} forGroups={forGroups} forRooms={forRooms} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
