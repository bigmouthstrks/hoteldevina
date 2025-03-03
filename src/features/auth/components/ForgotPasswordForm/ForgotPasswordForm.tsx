import { FC, useState } from 'react';
import { Button, Form, Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '@shared/hooks';
import { API_URL, MessageType } from '@models/consts';
import { useSnackbar } from '@shared/hooks';
import styles from './ForgotPasswordForm.module.scss';

export const ForgotPasswordForm: FC = () => {
  const [email, setEmail] = useState('');
  const { post } = useFetch();
  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await post(`${API_URL}/auth/request-password-reset`, { email });
      showSnackbar(response.message, MessageType.SUCCESS);
      navigate('/login');
    } catch {
      showSnackbar('Ocurrió un error reiniciar la contraseña', MessageType.ERROR);
    }
  };

  return (
    <section className={styles.forgotPassword}>
      <div className={styles.formBox}>
        <Container className="form">
          <Card.Title className={styles.title}>Restablecer contraseña</Card.Title>
          <Card.Subtitle className="text-danger">
            Si su correo está registrado en nuestra base de datos, le enviaremos instrucciones para
            restablecer su contraseña.
          </Card.Subtitle>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese su correo electrónico"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Enviar
              </Button>
            </Form>
          </Card.Body>
        </Container>
      </div>
    </section>
  );
};
