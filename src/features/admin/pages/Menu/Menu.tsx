import { MenuCard } from '@admin/components';
import { useTitle } from '@shared/hooks';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';

export const Menu = () => {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle('Inicio');
  }, []);

  return (
    <Container fluid>
      <Row className="justify-content-center pt-5 pb-5 gap-5 gap-xl-0">
        <MenuCard header="Realizar Check in" body={<>Hacer check-in de pasajeros</>}>
          <Link to="/admin/check-in" className="btn btn-primary">
            Check-in
          </Link>
        </MenuCard>
        <MenuCard header="Realizar Check out" body={<>Hacer check-out de pasajeros</>}>
          <Link to="/admin/check-out" className="btn btn-primary">
            Check-out
          </Link>
        </MenuCard>
        {/* TODO: Implementar toda funcionalidad de facturación
        <MenuCard
          header="Opciones de Facturación"
          body={
            <ul>
              <li>Emitir factura</li>
              <li>Emitir boleta</li>
              <li>Reenviar boleta/factura</li>
              <li>Imprimir boleta/factura</li>
            </ul>
          }
        >
          <Button>Facturación</Button>
        </MenuCard>
        */}
        <MenuCard
          header="Administrar Reservas"
          body={
            <ul>
              <li>Realizar una nueva reserva</li>
              <li>Cancelar una reserva</li>
              <li>Confirmar una reserva</li>
            </ul>
          }
        >
          <Link to="/admin/reservations" className="btn btn-primary">
            Reservas
          </Link>
        </MenuCard>
      </Row>
    </Container>
  );
};
