import useAuth from '@hooks/useAuth';
import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm: React.FC<any> = ({ handle }: { handle: any }) => {
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
    <form className="w-100" onSubmit={handleSubmit}>
      <Container className="form">
        <Row>
          <label className="d-flex flex-column">
            <span className="px-2">Correo electrónico</span>
            <input
              type="text"
              placeholder="Ingrese su correo electrónico"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </Row>
        <Row>
          <label className="d-flex flex-column">
            <div className="d-flex justify-content-between px-2">
              <span>Contraseña</span>
              <Link tabIndex={-1} to="/reset-password">
                Olvidé mi contraseña
              </Link>
            </div>
            <input
              type="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </Row>
        <Button variant="primary" type="submit">
          Ingresar
        </Button>
        <div className="line"></div>
        <Button variant="secondary" onClick={handle}>
          Crear una cuenta
        </Button>
      </Container>
    </form>
  );
};

export default LoginForm;
