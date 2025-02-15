import useAuth from '@hooks/useAuth';
import { FC, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm: FC = () => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === '123') {
      login();
      navigate('/');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <Form className="w-100" onSubmit={handleSubmit}>
      <Container className="form">
        <Form.Group>
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su correo electrónico"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
