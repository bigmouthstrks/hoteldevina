import { useAuth } from '@auth/hooks';
import { CollapseMenuProps } from '@models/props';
import { FC, useMemo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const CollapseMenu: FC<CollapseMenuProps> = ({ handleLink }) => {
  const { isAuthenticated, isAdmin, logout } = useAuth();
  const handleLogout = () => {
    handleLink();
    logout();
  };
  const links = useMemo(() => {
    const menuItems = [];
    let order = 1;
    menuItems.push(
      { to: '/', text: 'Inicio', order: order++ },
      { to: '/rooms', text: 'Habitaciones', order: order++ },
      { to: '/reservation-form', text: '¡Reserva ahora!', order: order++ }
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
        { to: '/login', text: 'Iniciar sesión', order: order++ },
        { to: '/login-admin', text: 'Iniciar sesión (admin test)', order: order++ },
        { to: '/register', text: 'Crear cuenta', order: order++ }
      );
    }
    return [...menuItems].sort((a, b) => a.order - b.order);
  }, [isAuthenticated, isAdmin]);

  return (
    <nav role="navigation">
      <Container>
        <Row className="vh-100 align-items-center">
          <Col md={6} className="mx-auto vh-100 d-flex align-items-center">
            <ul className="list-unstyled menu">
              {links.map((item, index) => (
                <li key={index}>
                  <Link to={item.to} onClick={item.logout ? handleLogout : handleLink}>
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
