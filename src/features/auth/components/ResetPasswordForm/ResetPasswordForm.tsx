import { FC, useState, useEffect } from 'react';
import { Button, Form, Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useFetch } from '@shared/hooks';
import { API_URL, MessageType } from '@models/consts';
import { useSnackbar } from '@shared/hooks';
import styles from './ResetPasswordForm.module.scss';

export const ResetPasswordForm: FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const { post } = useFetch();
  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const token = new URLSearchParams(location.search).get('token');

  const handleNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      showSnackbar('Las contraseñas no coinciden', MessageType.ERROR);
      return;
    }

    try {
      const response = await post(`${API_URL}/auth/commit-password-reset`, {
        token,
        newPassword,
      });
      showSnackbar(response.message, MessageType.SUCCESS);
      navigate('/login');
    } catch {
      showSnackbar('Ocurrió un error al restablecer la contraseña', MessageType.ERROR);
    }
  };

  useEffect(() => {
    setIsValid(
      newPassword === confirmPassword && newPassword.length > 0 && confirmPassword.length > 0
    );
  }, [newPassword, confirmPassword]);

  return (
    <section className={styles.resetPassword}>
      <div className={styles.formBox}>
        <Container className="form">
          <Card.Title className={styles.title}>Restablecer contraseña</Card.Title>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Nueva contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese su nueva contraseña"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirmar contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirme su nueva contraseña"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100" disabled={!isValid}>
                Restablecer contraseña
              </Button>
            </Form>
          </Card.Body>
        </Container>
      </div>
    </section>
  );
};
