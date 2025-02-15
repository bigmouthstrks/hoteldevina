import useAuth from '@hooks/useAuth';
import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import { Button } from 'react-bootstrap';

const Login: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
    <section className={styles.login}>
      <div className={styles.loginBox}>
        <div className={styles.title}>
          <h3>Inicio de sesión</h3>
          <p className="text-center">Un paso más cerca de tu próxima gran aventura 💡</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="d-flex flex-column">
            <span className="px-2">Correo electrónico</span>
            <input
              type="text"
              placeholder="Ingrese su correo electrónico"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
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
          <Button variant="primary" type="submit">
            Ingresar
          </Button>
          <div className="line"></div>
          <Button variant="secondary">Crear una cuenta</Button>
        </form>
      </div>
    </section>
  );
};

export default Login;
