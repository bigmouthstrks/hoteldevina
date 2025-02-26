import { FC } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './ReturnButton.module.scss';

export const ReturnButton: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleReturn = () => {
    const currentPath = location.pathname;
    if (currentPath === '/register') {
      navigate('/login');
    } else if (currentPath === '/login') {
      navigate('/');
    } else {
      navigate(-1);
    }
  };

  return (
    <Button className={styles.button} variant="light" color="primary" onClick={handleReturn}>
      ⬅️ Volver
    </Button>
  );
};
