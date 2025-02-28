import { useModal } from '@shared/hooks/useModal';
import { Modal as Dialog, Button } from 'react-bootstrap';

export const Modal = () => {
  const { show, header, body, handleClose, handleAccept } = useModal();

  return (
    <Dialog show={show} onHide={handleClose} centered>
      <Dialog.Header closeButton>
        <Dialog.Title>{header}</Dialog.Title>
      </Dialog.Header>
      <Dialog.Body>{body}</Dialog.Body>
      <Dialog.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleAccept}>
          Guardar
        </Button>
      </Dialog.Footer>
    </Dialog>
  );
};
