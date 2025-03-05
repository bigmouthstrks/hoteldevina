import { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { HeaderProps } from '@models/props';
import { useTitle } from '@shared/hooks';
import { HeroSection } from '@core/components';
import { CollapseMenu } from '../CollapseMenu';

export const Header: FC<HeaderProps> = ({ isSticky, isStatic, showHero = true }) => {
  const { title } = useTitle();
  return (
    <>
      <header
        className={`${styles.siteHeader} ${isSticky ? styles.scrolled : ''} ${isStatic ? styles.static : ''}`}
      >
        <Container>
          <Row className="align-items-center align-content-start">
            <Col xs={4} className="site-logo">
              <Link to="/">
                <img src="/images/logo_hotel.webp" alt="Logo Hotel de Viña" />
              </Link>
            </Col>
            <Col xs={4} className="text-center">
              <Link className={styles.title} to="/">
                {title}
              </Link>
            </Col>
            <CollapseMenu />
          </Row>
        </Container>
      </header>
      {showHero && <HeroSection />}
    </>
  );
};
