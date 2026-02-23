import { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [showMapa, setShowMapa] = useState(false);

  return (
    <footer className="py-4 mt-5">
      <Container>
        <Row className="justify-content-between text-center">
          <Col md={3} className="mb-3 mb-md-0">
            <h5 className="footer-titulo">Contactanos</h5>
            <p className="footer-texto mb-1">info@lepa.com.ar</p>
            <p className="footer-texto mb-1">ignaciolp@lepa.com.ar</p>
            <p className="footer-texto mb-0">
              0381-4624133 // 0381-6852533 // 381-5934826
            </p>
          </Col>
          <Col md={3} className="mb-3 mb-md-0">
            <h5 className="footer-titulo">Dónde estamos</h5>
            <div
              className="footer-mapa-container"
              onClick={() => setShowMapa(true)}
            >
              <iframe
                src="https://www.google.com/maps?q=-26.897664,-65.221159&output=embed"
                className="footer-mapa"
                title="Ubicación Plot Tucumán"
                loading="lazy"
              ></iframe>
              <p className="footer-texto">PLOT (Parque Logístico Tucumán). Av. Circunvalación RN 38, Km 801. San Miguel de Tucumán</p>
              <div className="footer-mapa-overlay"></div>
            </div>
          </Col>
          <Col md={3}>
            <h5 className="footer-titulo">Nuestro equipo</h5>
            <NavLink to="/quienes-somos">
              <img
                src="/img/quienes somos/equipo11tr.png"
                alt="Nuestro equipo"
                className="img-fluid footer-equipo-img"
              />
            </NavLink>
          </Col>
        </Row>
        <hr className="footer-hr" />
        <p className="footer-copyright mb-0 text-center">
          &copy; {new Date().getFullYear()} Lepa Construcciones s.r.l. -
          Movimiento de suelos, Obras Civiles y Alquiler de Maquinaria Pesada
        </p>
      </Container>

      <Modal
        show={showMapa}
        onHide={() => setShowMapa(false)}
        centered
        size="lg"
      >
        <Modal.Body className="modal-mapa-body p-0">
          <iframe
            src="https://www.google.com/maps?q=-26.897664,-65.221159&output=embed"
            className="modal-mapa"
            title="Ubicación Plot Tucumán"
            loading="lazy"
          ></iframe>
        </Modal.Body>
      </Modal>
    </footer>
  );
};

export default Footer;
