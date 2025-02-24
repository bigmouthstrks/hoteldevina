import { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import styles from './Hero.module.scss';

const HeroSection: FC = () => {
  return (
    <ParallaxProvider>
      <Parallax speed={-10}>
        <section className={styles.heroSection}>
          <Container className="h-100 d-flex justify-content-center align-items-center text-center">
            <Row>
              <Col>
                <h3>Bienvenido a la ciudad jardín</h3>
              </Col>
            </Row>
          </Container>
        </section>
      </Parallax>
    </ParallaxProvider>
  );
};

export default HeroSection;
