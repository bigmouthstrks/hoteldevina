import { FC } from 'react';
import styles from './Login.module.scss';
import RegisterForm from '@auth/components/RegisterForm/RegisterForm';
import LoginForm from '@auth/components/LoginForm/LoginForm';
import ReturnButton from '@shared/components/ReturnButton/ReturnButton';
import { LoginProps } from '@models/props';

const Login: FC<LoginProps> = ({ isRegisterMode, isAdminMode }: LoginProps) => {
  return (
    <section className={styles.login}>
      <div className={`${styles.loginBox} ${isAdminMode ? styles.admin : ''}`}>
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
              {!isAdminMode && (
                <p className="text-center">Un paso más cerca de tu próxima gran aventura 💡</p>
              )}
            </div>
            <LoginForm isAdminMode={isAdminMode} />
          </>
        )}
      </div>
      <ReturnButton />
    </section>
  );
};

export default Login;
