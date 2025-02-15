import { FC, useState } from 'react';
import styles from './Login.module.scss';
import RegisterForm from '@components/RegisterForm/RegisterForm';
import LoginForm from '@components/LoginForm/LoginForm';

const Login: FC = () => {
  const [isRegisterMode, setRegisterMode] = useState(false);

  const handleRegister = () => {
    setRegisterMode(true);
  };

  return (
    <section className={styles.login}>
      <div className={styles.loginBox}>
        {isRegisterMode ? (
          <>
            <div className={styles.title}>
              <h3 className="text-center">Crear una cuenta</h3>
              <p className="text-center">Datos de inicio de sesión</p>
            </div>
            <RegisterForm />
          </>
        ) : (
          <>
            <div className={styles.title}>
              <h3 className="text-center">Inicio de sesión</h3>
              <p className="text-center">Un paso más cerca de tu próxima gran aventura 💡</p>
            </div>
            <LoginForm handle={handleRegister} />
          </>
        )}
      </div>
    </section>
  );
};

export default Login;
