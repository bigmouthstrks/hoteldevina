import { FC } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import styles from './RegisterForm.module.scss';
import { User } from '@models/user';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@auth/hooks';
import { useFormData } from '@shared/hooks';

export const RegisterForm: FC = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const { formData, handleInputChange: handleChange } = useFormData<User>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const user = Object.fromEntries(formData.entries());
    await register(user);
    navigate('/login');
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
            type="password"
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
