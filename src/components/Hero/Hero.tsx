import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./Hero.css";

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <Container className="h-100 d-flex justify-content-center align-items-center text-center">
        <Row>
          <Col md={10} data-aos="fade-up">
            <span className="custom-caption">¡Bienvenido a la ciudad jardín!</span>
            <h2 className="heading">Hotel de Viña</h2>
          </Col>
        </Row>
      </Container>

      <a className="mouse smoothscroll" href="#next">
        <div className="mouse-icon">
          <span className="mouse-wheel"></span>
        </div>
      </a>
    </section>
  );
};

export default HeroSection;
