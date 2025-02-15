import { FC, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import styles from './RegisterForm.module.scss';

interface FormData {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
}

const RegisterForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ event });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log({ name, value, e });
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Container className={`${styles.registerForm} form`}>
        <Form.Group>
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            name="email"
            type="text"
            placeholder="Ingrese su correo electrónico"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            name="password"
            type="text"
            placeholder="Ingrese su contraseña"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Row>
          <span className="text-center">Datos personales</span>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                name="firstName"
                type="text"
                placeholder="Ingrese su nombre"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                name="lastName"
                type="text"
                placeholder="Ingrese su apellido"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group>
            <Form.Label>
              <span className="px-2">
                Número de teléfono <span className="fw-normal">(anteponer código de país)</span>
              </span>
            </Form.Label>
            <Form.Control
              name="phoneNumber"
              type="text"
              placeholder="Ingrese su número de teléfono"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Crear cuenta
        </Button>
      </Container>
    </Form>
  );
};

export default RegisterForm;
