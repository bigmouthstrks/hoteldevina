import React from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import styles from './Menu.module.scss'; // Importa el módulo SCSS

const MenuSection: React.FC = () => {
  // Datos para las pestañas
  const mains = [20, 35, 15, 10, 8.35, 22];
  const desserts = [11, 72, 26, 42, 7.35, 22];
  const drinks = [32, 14, 93, 18, 38.35, 69];

  return (
    <section
      className={styles.menuSection}
      style={{ backgroundImage: "url('./images/hero_3.jpg')" }}
    >
      {/* Overlay */}
      <div className={styles.overlay}></div>
      <Container className="z-index-1">
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h2 className="display-5 fw-bold text-white mb-4" data-aos="fade">
              Our Restaurant Menu
            </h2>
            <p className="lead text-white" data-aos="fade" data-aos-delay="100">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </Col>
        </Row>
        <Tabs
          defaultActiveKey="mains"
          id="menuTab"
          className={`${styles.foodMenuTabs} nav-pills justify-content-center mb-5`}
          data-aos="fade"
        >
          <Tab
            eventKey="mains"
            title="Mains"
            className="fw-bold text-uppercase"
          >
            <Row className="g-4">
              <Col md={6}>
                {mains.slice(0, 3).map((price, index) => (
                  <MenuItem
                    key={index}
                    price={price}
                    name={`Menu Item ${index + 1}`}
                  />
                ))}
              </Col>
              <Col md={6}>
                {mains.slice(3).map((price, index) => (
                  <MenuItem
                    key={index}
                    price={price}
                    name={`Menu Item ${index + 4}`}
                  />
                ))}
              </Col>
            </Row>
          </Tab>
          <Tab
            eventKey="desserts"
            title="Desserts"
            className="fw-bold text-uppercase"
          >
            <Row className="g-4">
              <Col md={6}>
                {desserts.slice(0, 3).map((price, index) => (
                  <MenuItem
                    key={index}
                    price={price}
                    name={`Dessert Item ${index + 1}`}
                  />
                ))}
              </Col>
              <Col md={6}>
                {desserts.slice(3).map((price, index) => (
                  <MenuItem
                    key={index}
                    price={price}
                    name={`Dessert Item ${index + 4}`}
                  />
                ))}
              </Col>
            </Row>
          </Tab>
          <Tab
            eventKey="drinks"
            title="Drinks"
            className="fw-bold text-uppercase"
          >
            <Row className="g-4">
              <Col md={6}>
                {drinks.slice(0, 3).map((price, index) => (
                  <MenuItem
                    key={index}
                    price={price}
                    name={`Drink Item ${index + 1}`}
                  />
                ))}
              </Col>
              <Col md={6}>
                {drinks.slice(3).map((price, index) => (
                  <MenuItem
                    key={index}
                    price={price}
                    name={`Drink Item ${index + 4}`}
                  />
                ))}
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </section>
  );
};

const MenuItem = ({ price, name }: { price: number; name: string }) => {
  return (
    <div className={styles.foodMenu}>
      <span className="d-block text-primary fs-4 fw-bold mb-3">
        ${price}.00
      </span>
      <h3 className="text-white">
        <a href="#" className={styles.menuItemLink}>
          {name}
        </a>
      </h3>
      <p className="text-white text-opacity-75">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
    </div>
  );
};

export default MenuSection;
