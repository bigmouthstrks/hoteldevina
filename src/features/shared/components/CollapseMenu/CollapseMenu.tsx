import { useAuth } from '@auth/hooks';
import { MessageType } from '@models/consts';
import { CollapseMenuProps } from '@models/props';
import { useSnackbar } from '@shared/hooks';
import { FC, useMemo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const CollapseMenu: FC<CollapseMenuProps> = ({ handleLink }) => {
  const { showSnackbar } = useSnackbar();
  const { isAuthenticated, isAdmin, logout } = useAuth();
  const handleLogout = () => {
    handleLink();
    showSnackbar('Se ha cerrado sesión correctamente', MessageType.SUCCESS);
    logout();
  };
  const links = useMemo(() => {
    const menuItems = [];
    let order = 1;
    menuItems.push(
      { to: '/', text: 'Inicio', order: order++ },
      { to: '/rooms', text: 'Habitaciones', order: order++ }
    );
    if (isAdmin) {
      menuItems.push({ to: '/admin', text: 'Menu administración', order: order++ });
    }
    if (isAuthenticated) {
      menuItems.push(
        { to: '/my-reservations', text: 'Mis Reservas', order: order++ },
        { to: '/', text: 'Cerrar sesión', order: order++, logout: true }
      );
    } else {
      menuItems.push(
        { to: '/login', text: 'Iniciar sesión', order: order++, className: 'btn btn-secondary' },
        {
          to: '/register',
          text: 'Crear cuenta',
          order: order++,
          className: 'btn btn-primary text-white',
        }
      );
    }
    return [...menuItems].sort((a, b) => a.order - b.order);
  }, [isAuthenticated, isAdmin]);

  return (
    <nav role="navigation">
      <Container>
        <Row className="vh-100 align-items-center">
          <Col md={6} className="mx-auto vh-100 d-flex align-items-center justify-content-center">
            <ul className="list-unstyled menu">
              {links.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.to}
                    onClick={item.logout ? handleLogout : handleLink}
                    className={`mb-3 ${item.className}`}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};
