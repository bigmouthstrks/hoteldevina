import useAuth from '@hooks/useAuth';
import useFormData from '@hooks/useForm';
import { User } from '@models/user';
import { FC } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm: FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { formData, handleInputChange: handleChange } = useFormData<User>({
    email: '',
    password: '',
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const user = Object.fromEntries(formData.entries());
    login(user);
    navigate('/');
  };

  return (
    <Form className="w-100" onSubmit={handleSubmit}>
      <Container className="form">
        <Form.Group>
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            name="email"
            type="email"
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
        <Button variant="primary" type="submit">
          Ingresar
        </Button>
        <div className="line"></div>
        <Link className="btn btn-secondary" to="/register">
          Crear una cuenta
        </Link>
      </Container>
    </Form>
  );
};

export default LoginForm;
