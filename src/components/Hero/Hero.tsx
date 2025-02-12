import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Hero.module.scss';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const HeroSection: React.FC = () => {
  return (
    <ParallaxProvider>
      <Parallax speed={-10}>
        <section className={styles.heroSection}>
          <Container className="h-100 d-flex justify-content-center align-items-center text-center">
            <Row>
              <Col md={10} data-aos="fade-up">
                <span className={styles.customCaption}>
                  ¡Bienvenido a la ciudad jardín!
                </span>
                <h2 className={styles.heading}>Hotel de Viña</h2>
              </Col>
            </Row>
          </Container>
          <a className={styles.mouse} href="#next">
            <div className={styles.mouseIcon}>
              <span className={styles.mouseWheel}></span>
            </div>
          </a>
        </section>
      </Parallax>
    </ParallaxProvider>
  );
};

export default HeroSection;
