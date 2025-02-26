import { FC, useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';

export const Loading: FC = () => {
  const [loadingText, setLoadingText] = useState('Cargando');
  useEffect(() => {
    let dots = '.';
    const interval = setInterval(() => {
      setLoadingText(loadingText + dots);
      if (dots.length === 3) {
        dots = '';
      } else {
        dots += '.';
      }
    }, 700);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Container
      className="d-flex flex-column gap-4 align-items-center justify-content-center"
      fluid
      style={{ height: '100vh' }}
    >
      <Spinner animation="border" variant="secondary" style={{ width: '4rem', height: '4rem' }} />
      <div className="d-flex justify-content-center w-100">
        <span style={{ width: '100px' }}>{loadingText}</span>
      </div>
    </Container>
  );
};
