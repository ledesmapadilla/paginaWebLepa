import { Container } from "react-bootstrap";

const LaEmpresa = () => {
  return (
    <section className="empresa-descripcion">
      <div className="empresa-descripcion-overlay"></div>
      <div className="empresa-descripcion-content">
        <Container className="position-relative empresa-z2">
          <h1 className="footer-titulo text-center display-4">
            Lepa Construcciones srl
          </h1>
        </Container>
        <Container className="position-relative empresa-z2">
          <div className="empresa-titulo-row">
            <img
              src="/img/empresa/et11tr.png"
              alt="Proyecto"
              className="img-fluid empresa-titulo-img"
            />
            <h2 className="empresa-descripcion-texto empresa-titulo-texto fs-5">
              Lepa Hnos. es una empresa iniciada en 2011 con el objeto de brindar
              soluciones a la industria tucumana. Con el correr de los años se
              logró un equipamiento y un expertis que hoy nos permite alquilar
              maquinaria y realizar obras propias, llevando a cabo todas las etapas de las mismas (
              proyecto, ejecución y supervisión) de tal forma de entregar trabajos
              llave en mano, con las exigencias que el cliente necesita.
            </h2>
          </div>
        </Container>
        <Container className="position-relative empresa-z2">
          <h3 className="footer-titulo display-6 ms-5 mt-5 empresa-subtitulo">
            Equipos propios
          </h3>
        </Container>
        <Container className="position-relative empresa-z2">
          <div className="equipo-item equipo-ml-1">
            <div className="equipo-icons-piramide">
              <div className="equipo-icons-top">
                <img src="/img/empresa/maquinas/retrotr.png" alt="Equipo" className="equipo-icon" /><img src="/img/empresa/maquinas/retrotr.png" alt="Equipo" className="equipo-icon" />
              </div>
              <div className="equipo-icons-bottom">
                <img src="/img/empresa/maquinas/retrotr.png" alt="Equipo" className="equipo-icon" />
              </div>
            </div>
            <h4 className="equipo-nombre fs-4">Retroexcavadoras sobre orugas</h4>
          </div>
          <div className="equipo-item equipo-ml-3">
            <div className="equipo-icons-vertical">
              <img src="/img/empresa/maquinas/pala.avif" alt="Equipo" className="equipo-icon equipo-icon-espejo" />
              <img src="/img/empresa/maquinas/pala.avif" alt="Equipo" className="equipo-icon" />
            </div>
            <h4 className="equipo-nombre fs-4 equipo-nombre-arriba">Palas cargadoras</h4>
          </div>
          <div className="equipo-item equipo-ml-0 ps-5 ms-5">
            <img src="/img/empresa/maquinas/retropala.png" alt="Equipo" className="equipo-icon equipo-icon-separado" /><img src="/img/empresa/maquinas/retropala.png" alt="Equipo" className="equipo-icon" />
            <h4 className="equipo-nombre fs-4">Retropalas</h4>
          </div>
          <div className="equipo-item equipo-ml-4">
            <img src="/img/empresa/maquinas/bateastr.png" alt="Equipo" className="equipo-icon equipo-icon-grande" />
            <h4 className="equipo-nombre fs-4 ms-1">Camiones bateas</h4>
          </div>
          <div className="equipo-item equipo-ml-0">
            <img src="/img/empresa/maquinas/carretontr.png" alt="Equipo" className="equipo-icon equipo-icon-grande" />
            <h4 className="equipo-nombre fs-4">Carretones</h4>
          </div>
          <div className="equipo-item equipo-ml-5 mt-n3">
            <img src="/img/empresa/maquinas/moto.png" alt="Equipo" className="equipo-icon" />
            <h4 className="equipo-nombre fs-4 ms-3">Motoniveladora</h4>
          </div>
          <div className="equipo-item equipo-ml-6 mt-5 mb-0">
            <div className="equipo-icons-vertical">
              <img src="/img/empresa/maquinas/gasoil.png" alt="Equipo" className="equipo-icon equipo-icon-gasoil" />
              <div className="equipo-icons-row">
                <img src="/img/empresa/maquinas/cont.png" alt="Equipo" className="equipo-icon equipo-icon-cont" />
                <img src="/img/empresa/maquinas/vibro1.png" alt="Equipo" className="equipo-icon equipo-icon-cont" />
              </div>
            </div>
            <h4 className="equipo-nombre fs-4 equipo-nombre-accesorios">Accesorios</h4>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default LaEmpresa;
