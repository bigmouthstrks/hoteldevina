import MenuCard from '@admin/components/MenuCard';
import { Button, Card, Container, Row } from 'react-bootstrap';

const Menu = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center gap-5 pt-5 pb-5">
        <MenuCard header="Realizar Check in" body={<>Hacer check-in de pasajeros</>}>
          <Button>Check-in</Button>
        </MenuCard>
        <MenuCard header="Realizar Check out" body={<>Hacer check-out de pasajeros</>}>
          <Button>Check-Out</Button>
        </MenuCard>
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
          <Button>Reservas</Button>
        </MenuCard>
      </Row>
    </Container>
  );
};

export default Menu;
