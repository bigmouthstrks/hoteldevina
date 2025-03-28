import { User } from '@models/user';
import { FC } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AdminProps } from '@models/props';
import { useAuth } from '@auth/hooks';
import { useFormData, useSnackbar } from '@shared/hooks';
import { API_URL, MessageType } from '@models/consts';
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

  const handleGoogleLogin = async () => {
    window.location.href = `${API_URL}/auth/google`;
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
            <div className="line" />
            <Link className="btn btn-secondary" to="/register">
              Crear una cuenta
            </Link>

            <Button
              variant="white" // Light background for Google-style button
              onClick={handleGoogleLogin} // Attach the click handler
              className="d-flex align-items-center justify-content-center"
              style={{
                border: '1px solid #ccc', // Add a subtle border
                borderRadius: '20px', // Rounded corners
                padding: '8px 16px', // Adjust padding
                cursor: 'pointer', // Indicate it's clickable
                fontSize: '14px', // Adjust font size
                fontWeight: '500', // Bold text
                color: '#757575', // Google's text color
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow
              }}
            >
              <div className="me-2">
                {' '}
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  style={{ display: 'block', width: '20px', height: '20px' }}
                >
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  ></path>
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  ></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
              </div>

              <span className="gsi-material-button-contents">Ingresar con Google</span>
            </Button>
          </>
        )}
      </Container>
    </Form>
  );
};
