import { Container } from "react-bootstrap";

const QuienesSomos = () => {
  return (
    <section className="py-5 nosotros-bg">
      <div className="nosotros-overlay" />
      <Container className="nosotros-contenido">
        <h1 className="display-4 footer-titulo text-center nosotros-titulo">Nosotros</h1>
        <div className="text-center mx-auto nosotros-texto">
          <p className="text-white fs-4 mb-2">
            LEPA Construcciones es una empresa vial dedicada a dar soluciones
            a las grandes empresas del medio. Cuenta con una amplia flota de
            máquinas y herramientas, que le permite tanto desarrollar sus
            propias obras, como proveer de equipos a las distintas industrias
            de Tucumán. Su trabajo diario se apoya en un equipo de
            colaboradores de muchos años de experiencia en sus tareas, personal
            de apoyo y supervisión permanente y lo que le da su sello
            distintivo, sus dueños ven personalmente cada trabajo, brindando al
            cliente una permanente relación de confianza, apoyo y superación
          </p>
        </div>
      </Container>
    </section>
  );
};

export default QuienesSomos;
