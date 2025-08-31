import { useAuth } from '@auth/hooks';
import { API_URL, MessageType, StatusType } from '@models/consts';
import { ActionsProps } from '@models/props';
import { ReservationEdit } from '@models/reservation';
import { useReservation } from '@reservations/hooks';
import { useFetch, useSnackbar } from '@shared/hooks';
import { useModal } from '@shared/hooks/useModal';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';

export const ReservationActions: React.FC<ActionsProps<ReservationEdit>> = ({
  formData,
  reservation,
  updateRefValues,
}) => {
  const {
    setCheckingReservation,
    setReservation,
    setModifyingReservation,
    modifyingReservation,
    checkingReservation,
  } = useReservation();
  const { handleShow } = useModal();
  const { showSnackbar } = useSnackbar();
  const { isAdmin } = useAuth();
  const { post } = useFetch();
  const navigate = useNavigate();

  const handleCheckout = async () => {
    setCheckingReservation((prev) => !prev);
  };

  const handleConfirm = async () => {
    const confirm = await handleShow(
      'Confirmación',
      `¿Desea confirmar la reserva ${reservation?.reservationId}?`
    );
    if (!confirm) return;
    post(`${API_URL}/reservations/${reservation?.reservationId}/confirm`)
      .then(({ data, message }) => {
        showSnackbar(message, MessageType.SUCCESS);
        setReservation((prev) => ({
          ...prev,
          reservationStatusId: data.reservationStatusId,
          reservationStatus: data.reservationStatus,
        }));
      })
      .catch((error) => {
        showSnackbar(error.message, MessageType.ERROR);
      });
  };

  const handleModify = async () => {
    const confirm = await handleShow(
      'Confirmación',
      `¿Desea modificar la reserva ${reservation?.reservationId}?`
    );
    if (!confirm) return;
    post(`${API_URL}/reservations/update/${reservation?.reservationId}`, {
      ...formData,
      nightsCount: Number(formData?.nightsCount ?? reservation?.nightsCount),
      passengerCount: Number(formData.passengerCount ?? reservation?.passengerCount),
      totalPrice: Number(formData.totalPrice ?? reservation?.totalPrice?.value),
    })
      .then(({ message, data }) => {
        showSnackbar(message, MessageType.SUCCESS);
        setReservation((prev) => ({
          ...data,
          rooms: prev?.rooms,
          reservationStatus: reservation?.reservationStatus,
        }));
        setModifyingReservation(false);
      })
      .catch(() => {
        showSnackbar('Ha ocurrido un error al modificar la reserva', MessageType.ERROR);
      });
  };

  const handleEdit = () => {
    setModifyingReservation((prev) => !prev);
    if (modifyingReservation) {
      updateRefValues(
        String(reservation?.checkOut),
        String(reservation?.totalPrice?.formattedValue)
      );
    }
  };

  const handleCancel = async () => {
    const confirm = await handleShow(
      'Cancelar',
      `¿Desea cancelar la reserva ${reservation?.reservationId}?`,
      'Conservar cambios',
      'Cancelar mi reserva'
    );
    if (!confirm) return;
    post(`${API_URL}/reservations/${reservation?.reservationId}/cancel`)
      .then(({ data, message }) => {
        showSnackbar(message, MessageType.SUCCESS);
        setReservation((prev) => ({
          ...prev,
          reservationStatusId: data.reservationStatusId,
          reservationStatus: data.reservationStatus,
        }));
      })
      .catch((error) => {
        showSnackbar(error.message, MessageType.ERROR);
      });
  };

  return (
    <Row xs={2}>
      {String(reservation?.reservationStatus?.reservationStatusId) ===
        StatusType.TO_BE_CONFIRMED && (
        <Col className="text-center">
          <Button variant="secondary" onClick={handleConfirm}>
            Confirmar reserva
          </Button>
        </Col>
      )}
      {(String(reservation?.reservationStatus?.reservationStatusId) === StatusType.CONFIRMED ||
        String(reservation?.reservationStatus?.reservationStatusId) ===
          StatusType.TO_BE_CONFIRMED) && (
        <Col className="text-center">
          <Button variant="danger" onClick={handleCancel}>
            Cancelar reserva
          </Button>
        </Col>
      )}
      {!checkingReservation &&
        !modifyingReservation &&
        isAdmin &&
        String(reservation?.reservationStatus?.reservationStatusId) === StatusType.IN_PROGRESS && (
          <>
            <Col className="te</Col>xt-center">
              <Button variant="primary" onClick={handleCheckout}>
                Realizar checkout
              </Button>
            </Col>
            <Col className="text-center">
              <Button variant="primary" onClick={handleEdit}>
                Modificar reserva
              </Button>
            </Col>
          </>
        )}
      {modifyingReservation &&
        String(reservation?.reservationStatus?.reservationStatusId) === StatusType.IN_PROGRESS && (
          <>
            <Col className="text-center">
              <Button variant="primary" onClick={handleEdit}>
                Cancelar
              </Button>
            </Col>
            <Col className="text-center">
              <Button variant="secondary" onClick={handleModify}>
                Confirmar
              </Button>
            </Col>
          </>
        )}
    </Row>
  );
};
