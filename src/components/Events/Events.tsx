import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import styles from './Events.module.scss';

const EventsSection: React.FC = () => {
  const events = [
    {
      id: 1,
      image: './images/img_1.jpg',
      date: 'Fecha ejemplo',
      title: 'Lorem ipsum dolor sit amet...',
      description: '',
    },
    {
      id: 2,
      image: './images/img_2.jpg',
      date: 'Fecha ejemplo',
      title: 'Example title',
      description: 'Separated they live in Bookmarksgrove...',
    },
    {
      id: 3,
      image: './images/img_3.jpg',
      date: 'Fecha ejemplo',
      title: 'Example title',
      description: 'Lorem ipsum dolor sit amet...',
    },
  ];

  return (
    <section className={styles.eventsSection}>
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col md={7}>
            <h2 className="fw-bold" data-aos="fade-up">
              Eventos
            </h2>
            <p data-aos="fade-up">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit...
            </p>
          </Col>
        </Row>
        <Row>
          {events.map((event, index) => (
            <Col
              lg={4}
              md={6}
              sm={6}
              key={event.id}
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <Card className={styles.eventCard}>
                <a href="#" className="mb-4 d-block">
                  <Image src={event.image} alt="Event" fluid />
                </a>
                <Card.Body className={styles.eventBody}>
                  <span className={styles.eventDate}>{event.date}</span>
                  <Card.Title as="h2" className={styles.eventTitle}>
                    <a href="#">{event.title}</a>
                  </Card.Title>
                  {event.description && (
                    <Card.Text>{event.description}</Card.Text>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default EventsSection;
