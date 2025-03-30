import { FC, useEffect } from 'react';
import styles from './Login.module.scss';
import { LoginProps } from '@models/props';
import { LoginForm } from '@auth/components/LoginForm/LoginForm';
import { RegisterForm } from '@auth/components';
import { Loading, ReturnButton } from '@shared/components';
import { useLocation } from 'react-router-dom';
import { useAuth } from '@auth/hooks';

export const Login: FC<LoginProps> = ({ isRegisterMode, isAdminMode }: LoginProps) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');
  const { googleLogin, isAuthenticated } = useAuth();
  const ssoInProcess = !isAuthenticated && token;
  useEffect(() => {
    if (!isAuthenticated && token) googleLogin(token);
  }, []);

  if (ssoInProcess) return <Loading />;

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
