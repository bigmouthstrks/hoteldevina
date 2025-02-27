import { useSnackbar } from '@shared/hooks';
import { Toast, ToastContainer } from 'react-bootstrap';

export const Snackbar = () => {
  const { show, hideSnackbar, message, type } = useSnackbar();
  return (
    <ToastContainer className="p-3" position="top-end" style={{ zIndex: 1000 }}>
      <Toast bg={type} onClose={hideSnackbar} show={true} delay={3000}>
        <Toast.Header closeButton={false}>
          <strong className="me-auto">{type}</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
