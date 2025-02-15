import { FC, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

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
    <form onSubmit={handleSubmit}>
      <Container className="form">
        <Row>
          <label className="d-flex flex-column">
            <span className="px-2">Correo electrónico</span>
            <input
              name="email"
              type="text"
              placeholder="Ingrese su correo electrónico"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </Row>
        <Row>
          <label className="d-flex flex-column">
            <span className="px-2">Contraseña</span>
            <input
              name="password"
              type="password"
              placeholder="Ingrese su contraseña"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
        </Row>

        <Row>
          <span className="text-center">Datos personales</span>
        </Row>

        <Row>
          <Col md={6}>
            <label className="d-flex flex-column">
              <span className="px-2">Nombre</span>
              <input
                name="firstName"
                type="text"
                placeholder="Ingrese su nombre"
                value={formData.firstName}
                onChange={handleChange}
              />
            </label>
          </Col>
          <Col md={6}>
            <label className="d-flex flex-column">
              <span className="px-2">Apellido</span>
              <input
                name="lastName"
                type="text"
                placeholder="Ingrese su apellido"
                value={formData.lastName}
                onChange={handleChange}
              />
            </label>
          </Col>
        </Row>
        <Row>
          <label className="d-flex flex-column">
            <span className="px-2">
              Número de teléfono <span className="fw-normal">(anteponer código de país)</span>
            </span>
            <input
              name="phoneNumber"
              type="number"
              placeholder="Ingrese su número de teléfono"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </label>
        </Row>
        <Button variant="primary" type="submit">
          Crear cuenta
        </Button>
      </Container>
    </form>
  );
};

export default RegisterForm;
