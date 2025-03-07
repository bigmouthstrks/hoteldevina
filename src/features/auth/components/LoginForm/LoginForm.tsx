import { User } from '@models/user';
import { FC } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AdminProps } from '@models/props';
import { useAuth } from '@auth/hooks';
import { useFormData, useSnackbar } from '@shared/hooks';
import { MessageType } from '@models/consts';
import { useUtils } from '@shared/hooks/useUtils';

export const LoginForm: FC<AdminProps> = ({ isAdminMode = false }) => {
  const { login } = useAuth();
  const { showSnackbar } = useSnackbar();
  const { formatUserForm } = useUtils();
  const navigate = useNavigate();
  const { formData, handleInputChange: handleChange } = useFormData<User>({
    email: '',
    password: '',
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const user = Object.fromEntries(formData.entries());
    try {
      await login(formatUserForm(user), isAdminMode);
      navigate(isAdminMode ? '/admin' : '/');
      showSnackbar(`Inicio de sesión éxitoso`, MessageType.SUCCESS);
    } catch {
      showSnackbar('Usuario o contraseña incorrecta', MessageType.ERROR);
    }
  };

  return (
    <Form className="w-100" onSubmit={handleSubmit}>
      <Container className="form">
        <Form.Group>
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Ingrese su correo electrónico"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Ingrese su contraseña"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Link to="/forgot-password">
          <p>
            <small>Olvidé mi contraseña</small>
          </p>
        </Link>
        <Button variant="primary" type="submit">
          Ingresar
        </Button>
        {!isAdminMode && (
          <>
            <div className="line"></div>
            <Link className="btn btn-secondary" to="/register">
              Crear una cuenta
            </Link>
          </>
        )}
      </Container>
    </Form>
  );
};
