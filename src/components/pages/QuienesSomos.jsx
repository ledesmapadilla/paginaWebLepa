import { Container, Row, Col } from "react-bootstrap";

const equipo = [
  { nombre: "Agustín", foto: "/img/quienes somos/agustin.jpg" },
  { nombre: "J. Ignacio", foto: "/img/quienes somos/ignacio.jpg" },
  { nombre: "Juan José", foto: "/img/quienes somos/juan jose.jpg" },
  { nombre: "Nelson",  foto: "/img/quienes somos/nelson.jpg" },
  { nombre: "Mauricio",  foto: "/img/quienes somos/mauricio.jpg" },
  { nombre: "Alejandro", foto: "/img/quienes somos/alejandro.jpg" },
  { nombre: "Rodrigo", foto: "/img/quienes somos/rodrigo.jpg" },
  { nombre: "Gabriel", foto: "/img/quienes somos/gabriel.jpg" },
  { nombre: "Hugo", foto: "/img/quienes somos/hugo.jpg" },
  { nombre: "Daniel", foto: "/img/quienes somos/daniel.jpg" },
  { nombre: "Cristian", foto: "/img/quienes somos/cristian.jpg" },
  { nombre: "Rafael", foto: "/img/quienes somos/rafael.jpg" },
  { nombre: "Ivan", foto: "/img/quienes somos/ivan.jpg" },
  { nombre: "Pedro", foto: "/img/quienes somos/pedro.jpg" },
  { nombre: "Misael", foto: "/img/quienes somos/misael.jpeg" },
];

const QuienesSomos = () => {
  return (
    <section className="py-5">
      <Container>
        <h1 className="display-4 mb-3 footer-titulo">Nosotros</h1>
        <div>
          <p className="text-white fs-5 mb-2">
            Desde hace años, trabajamos con dedicación, para tratar de
            superarnos y brindar un servicio de calidad a nuestros clientes,
            haciendo con cariño y profesionalismo, cada uno desde su posición,
            lo mejor posible.
          </p>
          <p className="text-white fs-5 mb-5">Los que hacemos Lepa, somos:</p>
        </div>
        <Row>
          {equipo.map((miembro, i) => (
            <Col key={i} lg={2} md={3} xs={12} className="text-center mb-4">
              <img
                src={miembro.foto}
                alt={miembro.nombre}
                className="equipo-foto mb-2"
              />
              <h5 className="text-white mb-0">{miembro.nombre}</h5>
              <p className="footer-texto">{miembro.posicion}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default QuienesSomos;
