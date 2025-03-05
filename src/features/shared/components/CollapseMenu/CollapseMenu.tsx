import { useAuth } from '@auth/hooks';
import { MessageType } from '@models/consts';
import { useScrollAndCollapse, useSnackbar } from '@shared/hooks';
import { FC, useMemo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './CollapseMenu.module.scss';
import { HamburgerMenu } from '../HamburgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faBook,
  faComputer,
  faDoorOpen,
  faHomeUser,
  faPencil,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export const CollapseMenu: FC = () => {
  const { showSnackbar } = useSnackbar();
  const { collapse, handleLink, toggleCollapse } = useScrollAndCollapse();
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
      { to: '/', text: 'Inicio', icon: faHomeUser, order: order++ },
      { to: '/rooms', text: 'Habitaciones', icon: faBed, order: order++ }
    );
    if (isAdmin) {
      menuItems.push({
        to: '/admin',
        text: 'Menu administración',
        icon: faComputer,
        order: order++,
      });
    }
    if (isAuthenticated) {
      menuItems.push(
        { to: '/my-reservations', text: 'Mis Reservas', icon: faBook, order: order++ },
        { to: '/', text: 'Cerrar sesión', order: order++, icon: faDoorOpen, logout: true }
      );
    } else {
      menuItems.push(
        {
          to: '/login',
          text: 'Iniciar sesión',
          icon: faUser,
          order: order++,
          className: 'btn btn-secondary',
        },
        {
          to: '/register',
          text: 'Crear cuenta',
          icon: faPencil,
          order: order++,
          className: 'btn btn-primary text-white',
        }
      );
    }
    return [...menuItems].sort((a, b) => a.order - b.order);
  }, [isAuthenticated, isAdmin]);

  return (
    <Col xs={4}>
      <HamburgerMenu onClick={toggleCollapse} collapse={collapse} />
      <div className={`${styles.siteNavbar} ${collapse ? styles.collapsed : ''}`}>
        <nav role="navigation">
          <Container className="h-100">
            <Row className="align-items-center align-content-start h-100 pt-5">
              <Col className="mx-auto d-flex flex-column align-items-center justify-content-center gap-5">
                <HamburgerMenu
                  className="internalMenu"
                  onClick={toggleCollapse}
                  collapse={collapse}
                />
                <ul className="list-unstyled menu">
                  {links.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.to}
                        onClick={item.logout ? handleLogout : handleLink}
                        className={`${item.className} d-flex align-items-center gap-1`}
                      >
                        <FontAwesomeIcon icon={item.icon} className="me-1" />
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Container>
        </nav>
      </div>
    </Col>
  );
};
