import { Container, Row, Col } from "react-bootstrap";

const Inicio = () => {
  return (
    <section className="d-flex align-items-center py-3">
      <Container>
        <Row className="align-items-center justify-content-center py-3">
          <Col md="auto" className="mb-3 mb-md-0">
            <h2 className="hero-titulo-derecha text-white display-5 mb-0">
              Movimiento de suelos
              <br />
              Obras civiles
              <br />
              Alquiler de máquinas viales
            </h2>
          </Col>
          <Col md="auto" className="text-end">
            <h1 className="text-white display-1 mb-0">
              <span className="fw-bold">LEPA</span> <span className="fs-3" style={{ color: "#d1a948" }}>Hnos.</span>
            </h1>
          </Col>
        </Row>
        <hr style={{ borderColor: "#d1a948", opacity: 1 }} />
        <Row className="align-items-center mt-0">
          <Col md={6} className="text-center order-1 order-md-2">
            <img
              src="/img/Inicio/pc200.png"
              alt="Komatsu PC200"
              className="img-fluid hero-img"
            />
          </Col>
          <Col md={6} className="mb-1 mb-md-0 order-2 order-md-1">
            <h2 className="hero-titulo text-white display-6 mb-0">
              <span style={{ color: "#d1a948" }}>Nuestra especialidad:</span> Los trabajos pesados
            </h2>
          </Col>
        </Row>
        <Row className="align-items-center mt-0">
          <Col md={6} className="text-center mb-1 mb-md-0 order-1">
            <img
              src="/img/Inicio/wa200.png"
              alt="Komatsu WA200"
              className="img-fluid hero-img"
            />
          </Col>
          <Col md={6} className="order-2">
            <h2 className="hero-titulo text-white display-6 mb-0">
              <span style={{ color: "#d1a948" }}>Nuestro compromiso:</span> La calidad en las entregas
            </h2>
          </Col>
        </Row>
        <Row className="align-items-center mt-0">
          <Col md={6} className="text-center order-1 order-md-2">
            <img
              src="/img/Inicio/jd3.png"
              alt="John Deere"
              className="img-fluid hero-img"
            />
          </Col>
          <Col md={6} className="mb-1 mb-md-0 order-2 order-md-1">
            <h2 className="hero-titulo text-white display-6 mb-0">
              <span style={{ color: "#d1a948" }}>Nuestro sello:</span> La atención personalizada
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
