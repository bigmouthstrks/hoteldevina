import { useModal } from '@shared/hooks/useModal';
import { Modal as Dialog, Button } from 'react-bootstrap';

export const Modal = () => {
  const { show, header, body, cancel, confirm, handleClose, handleAccept } = useModal();

  return (
    <Dialog show={show} onHide={handleClose} centered>
      <Dialog.Header closeButton>
        <Dialog.Title>{header}</Dialog.Title>
      </Dialog.Header>
      <Dialog.Body>{body}</Dialog.Body>
      <Dialog.Footer>
        <Button variant="primary" onClick={handleClose}>
          {cancel ?? 'Cancelar'}
        </Button>
        <Button variant="secondary" onClick={handleAccept}>
          {confirm ?? 'Guardar'}
        </Button>
      </Dialog.Footer>
    </Dialog>
  );
};
