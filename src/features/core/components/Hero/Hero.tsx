import { FC } from 'react';
import { Container } from 'react-bootstrap';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import styles from './Hero.module.scss';

export const HeroSection: FC = () => {
  return (
    <ParallaxProvider>
      <Parallax speed={-10}>
        <section className={styles.heroSection}>
          <Container className="h-100 d-flex justify-content-center align-items-center text-center"></Container>
        </section>
      </Parallax>
    </ParallaxProvider>
  );
};
