import { Container, Row, Col } from "react-bootstrap";

const clientes = [
  { nombre: "Cia. Azucarera Los Balcanes", logo: "/img/Clientes/balcanes tr.png", obra: "Ingenio Florida y Cruz Alta", referencia: "Ing. Roberto Alvornoz" },
  { nombre: "Ivecor", logo: "/img/Clientes/ivecortr.png", obra: "Recounting gasoductos", referencia: "Ing. Garrido" },
  { nombre: "Citrusvil", logo: "/img/Clientes/citrusviltr.png", obra: "Arrancado de plantas de limón", referencia: "" },
  { nombre: "Argentilemon", logo: "/img/Clientes/argentilemontr.png", obra: "Arrancado de plantas de limón", referencia: "Ing. Marcos Rossini" },
  { nombre: "San Miguel", logo: "/img/Clientes/sanmigueltr.png", obra: "Arrancado de plantas de limón", referencia: "Ing. Martinez Folker" },
  { nombre: "Brufor", logo: "/img/Clientes/brufor1tr.png", obra: "Infraestructura parque industrial Pozo Hondo", referencia: "Bernabé Forenza" },
  { nombre: "M3", logo: "/img/Clientes/m3tr.png", obra: "Excavación para edificio, Yerba Buena", referencia: "Arq. Sergio Ruiz" },
  { nombre: "Trigotuc", logo: "/img/Clientes/trigotuctr.png", obra: "Bases,caminería y piletones complejo avícola Cañetes", referencia: "Manuel Barinaga" },
];

const Clientes = () => {
  return (
    <section className="py-3">
      <Container>
        <h1 className="footer-titulo text-center display-4">Empresas que confían en nosotros</h1>
        <h4 className="text-white text-center mt-3">A lo largo de los años y a través de cada obra realizada, estas empresas nos brindaron su confianza</h4>
        <Row className="justify-content-center mt-3 g-4">
          {clientes.map((cliente, i) => (
            <Col key={i} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
              <div className="cliente-card">
                <div className="cliente-logo-wrapper">
                  <img
                    src={cliente.logo}
                    alt={cliente.nombre}
                    className={`cliente-logo${cliente.nombre === "Ivecor" ? " cliente-logo-lg" : ""}`}
                  />
                </div>
                <h5 className="cliente-nombre">{cliente.nombre}</h5>
                <p className="cliente-detalle">Obra: {cliente.obra || "-"}</p>
                <p className="cliente-detalle">Referencia: {cliente.referencia || "-"}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Clientes;
