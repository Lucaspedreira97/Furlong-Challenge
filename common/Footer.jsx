import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/footer.css"

export default function Footer() {
  return (
    <footer className = "footer" >
      <Container>
        <Row>
          <Col md={4}>
            <h5>Información de contacto</h5>
            <p>Teléfono: +1 555-555-5555</p>
            <p>Correo electrónico: info@furlong-fox.com.ar</p>
          </Col>
          <Col md={4}>
            <h5>Enlaces útiles</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/servicios">Servicios</a>
              </li>
              <li>
                <a href="/nosotros">Nosotros</a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Síguenos en redes sociales</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Facebook</a>
              </li>
              <li>
                <a href="/">Twitter</a>
              </li>
              <li>
                <a href="/">Instagram</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="bg-ligth text-center py-3">
        <Container>
          <p className="mb-0">
            © {new Date().getFullYear()} Furlong-Fox. Todos los derechos
            reservados.
          </p>
        </Container>
      </div>
    </footer>
  );
};