import { FC } from 'react';
import styles from './Login.module.scss';
import RegisterForm from '@components/RegisterForm/RegisterForm';
import LoginForm from '@components/LoginForm/LoginForm';
import ReturnButton from '@components/ReturnButton/ReturnButton';
import { LoginProps } from '@models/props';

const Login: FC<LoginProps> = ({ isRegisterMode }: LoginProps) => {
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
            <LoginForm />
          </>
        )}
      </div>
      <ReturnButton />
    </section>
  );
};

export default Login;
