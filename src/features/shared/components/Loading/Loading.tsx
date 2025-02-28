import { FC, useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';

export const Loading: FC<{ rendering?: boolean }> = ({ rendering }) => {
  const styles: React.CSSProperties = {
    height: '100%',
    position: 'fixed',
    top: '0',
    zIndex: '1000',
    background: 'rgba(0, 0, 0, 0.5)',
  };
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
      style={rendering ? styles : undefined}
    >
      <Spinner animation="border" variant="secondary" style={{ width: '4rem', height: '4rem' }} />
      <div className="d-flex justify-content-center w-100">
        <span style={{ width: '100px' }}>{loadingText}</span>
      </div>
    </Container>
  );
};
