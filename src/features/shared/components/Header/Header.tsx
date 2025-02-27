import { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { HeaderProps } from '@models/props';
import { useScrollAndCollapse, useTitle } from '@shared/hooks';
import { HeroSection } from '@core/components';
import { CollapseMenu } from '../CollapseMenu';

export const Header: FC<HeaderProps> = ({ isSticky, isStatic, showHero = true }) => {
  const { title } = useTitle();
  const { collapse, handleLink, toggleCollapse } = useScrollAndCollapse();
  return (
    <>
      <header
        className={`${styles.siteHeader} ${isSticky ? styles.scrolled : ''} ${isStatic ? styles.static : ''}`}
      >
        <Container>
          <Row className="align-items-center align-content-start">
            <Col xs={4} className="site-logo">
              <Link to="/">
                <img src="./images/logo_hotel.png" alt="Logo Hotel de Viña" />
              </Link>
            </Col>
            <Col xs={4} className="text-center">
              <span className={styles.title}>{title}</span>
            </Col>
            <Col xs={4}>
              <div
                className={`${styles.siteMenuToggle} ${collapse ? styles.open : ''}`}
                onClick={() => toggleCollapse()}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={`${styles.siteNavbar} ${collapse ? styles.collapsed : ''}`}>
                <CollapseMenu handleLink={handleLink} />
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      {showHero && <HeroSection />}
    </>
  );
};
