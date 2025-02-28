import { MessageTranslate } from '@models/consts';
import { useSnackbar } from '@shared/hooks';
import { Toast, ToastContainer } from 'react-bootstrap';
import { BsInfoCircle } from 'react-icons/bs';

export const Snackbar = () => {
  const { show, hideSnackbar, message, type } = useSnackbar();
  return (
    <ToastContainer className="p-3 position-fixed" position="top-end" style={{ zIndex: 1000 }}>
      <Toast bg={type} onClose={hideSnackbar} show={show} delay={3000} autohide>
        <Toast.Header closeButton={false} className="d-flex gap-2">
          <BsInfoCircle color={`var(--bs-${type})`} size={25} />
          <strong className="me-auto">{MessageTranslate[type]}</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
