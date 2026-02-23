import { Container, Row, Col } from "react-bootstrap";

const rubros = [
  {
    nombre: "Industria Azucarera",
    imgs: ["/img/Obras/rubros/Industria azucarera/piletones cruz alta1.jpeg"],
    obras: [
      "Ingenio Concepción: limpieza y disposición final de cenizas de calderas",
      "Ingenio Marapa: limpieza y disposición final de cenizas de calderas",
      "Ingenio Cruz Alta: Construcción de 2 calicantos de sedimentación de cenizas",
      "Ingenio Cruz Alta: Movimiento de suelos para montaje de galpón de azúcar a granel",
      "Ingenio Cruz Alta: Limpieza de canales de abastecimiento de agua hacia el ingenio",
      "Ingenio La Florida: Construcción y mantenimiento de predio para disposición final de vinaza",
      "Ingenio La Florida: Mantenimiento de filtros silo de cenizas de calderas",
    ],
  },
  {
    nombre: "Industria Alimenticia",
    imgs: [
      "/img/Obras/rubros/Industria alimenticia/WhatsApp Image 2026-02-12 at 15.42.19.jpeg",
    ],
    obras: [
      "Granja avícola Momba: Movimiento de suelos para construcción de galpones avícolas",
      "Granja avícola Momba: Movimiento de suelos para montaje de galpón de planta de faena de pollos",
      "Granja avícola Momba: Construcción de 4 piletas de decantación de efluentes de planta de faena de pollos",
    ],
  },
  {
    nombre: "Industria Citrícola",
    video:
      "/img/Obras/rubros/Citricolas/WhatsApp Video 2026-02-14 at 07.51.04.mp4",
    imgs: [],
    obras: [
      "Citrusvil: Arrancado, acordonado y atizado de más de 100.000 plantas de limón",
      "Argentilemon: Arrancado, acordonado y atizado de más de 40.000 plantas de limón",
      "Finca Courel: Arrancado, acordonado y atizado de 25.000 plantas de limón",
      "Ucuchacra: Arrancado, acordonado y atizado de 80.000 plantas de limón",
      "Argentilemon: Movimiento de suelo para galpón en empalme",
      "Citrícola San Miguel: Arrancado, acordonado y atizado de 25.000 plantas de limón, finca Monte Grande",
    ],
  },
  {
    nombre: "Gasoductos",
    imgs: [
      "/img/Obras/rubros/gasoductos/gasoducto.jpg",
    ],
    imgClass: "rubro-img-gasoductos",
    obras: [
      "Ivecor: Alquiler de retroexcavadoras sobre orugas para construcción de gasoducto en La Pampa",
      "Ivecor: Alquiler de retroexcavadoras sobre orugas para recounting en Tartagal, Salta",
      "Ivecor: Alquiler de retroexcavadoras sobre orugas y pala cargadora para trabajos de recounting en Monteros, Tucumán",
    ],
  },
  {
    nombre: "Emprendimientos Inmobiliarios",
    imgs: [
      "/img/Obras/rubros/inmobiliario/WhatsApp Image 2026-02-12 at 09.44.00 (2).jpeg",
    ],
    obras: [
      "Brufor: Trazado de calles internas de parque Industrial, Pozo Hondo",
      "Bombacher: Ejecución de barrio cerrado Las Pircas, trazado de calles internas, servicios de luz y agua, caminería de acceso, Tafí del Valle",
      "Bombacher: Realización integral del proyecto Molino, con calles internas y servicios, en Tafí del Valle",
    ],
  },
  {
    nombre: "Construcción",
    video: "/img/Obras/rubros/construccion/WhatsApp Video 2026-02-14 at 19.22.07.mp4",
    videoClass: "rubro-video-construccion",
    imgs: [],
    obras: [
      "Guimar: Excavación para construcción de 2 torres edificio, Terrazul, Yerba Buena",
      "Guimar: Excavación para construcción de locales comerciales calle Güemes, Yerba Buena",
      "Metro Cúbico: Excavación para construcción de torre edificio, Higueritas, Yerba Buena",
      "Ing. Pfister: Excavación de cimientos de edificios, con implemento Almeja, para pilotines",
      "Werke: Movimiento de suelo para pavimentación interior Ingenio Providencia",
    ],
  },
  {
    nombre: "Comunicaciones",
    imgs: ["/img/Obras/rubros/comunicaciones/fibra.jpg"],
    obras: [
      "Cobra s.a.: Cavado y tendido de 80 kilómetros de tritubo para fibra óptica, desde Acheral hasta La Cocha, Tucumán",
    ],
  },
  {
    nombre: "Otras",
    imgs: ["/img/Obras/rubros/Otras/pit.jpg"],
    obras: [
      "UNT: Movimiento de suelo para pavimentacíon acceso a quinta Agronómica, Tucumán",
      "Guimar: Movimiento de suelo para construcción de canchas de futbol, Las Cañas, Yerba Buena",
      "Dycasa: Cavado para construcción de red de agua y cloacas, Alderetes, Banda del Río Sali",
      "Supercemento: Cavado de piletones y construcción de talud, en piletas de laminación canal San Luis",
      "Alfa Ingeniería: Protecciones de río y construcción de gaviones, Burruyacu, Tucumán",
    ],
  },
];

const fotos1 = [
  "/img/Obras/Carrusel1/IMG_20210503_141550320_HDR.jpg",
  "/img/Obras/Carrusel1/20240617_082512.jpg",
  "/img/Obras/Carrusel1/20250127_100957.jpg",
  "/img/Obras/Carrusel1/WhatsApp Image 2021-08-19 at 12.02.55.jpeg",
  "/img/Obras/Carrusel1/WhatsApp Image 2021-08-20 at 10.31.29 (2).jpeg",
  "/img/Obras/Carrusel1/WhatsApp Image 2026-02-10 at 22.37.46.jpeg",
  "/img/Obras/Carrusel1/WhatsApp Image 2026-02-10 at 22.37.58.jpeg",
  "/img/Obras/Carrusel1/WhatsApp Image 2026-02-12 at 09.44.00 (5).jpeg",
  "/img/Obras/Carrusel1/WhatsApp Image 2026-02-12 at 15.42.17.jpeg",
];

const fotos2 = [
  "/img/Obras/Carrusel2/20240620_133641.jpg",
  "/img/Obras/Carrusel2/WhatsApp Image 2026-02-10 at 22.31.19.jpeg",
  "/img/Obras/Carrusel2/WhatsApp Image 2026-02-10 at 22.37.44 (1).jpeg",
  "/img/Obras/Carrusel2/WhatsApp Image 2026-02-10 at 22.37.46 (1).jpeg",
  "/img/Obras/Carrusel2/WhatsApp Image 2026-02-10 at 22.37.56.jpeg",
  "/img/Obras/Carrusel2/WhatsApp Image 2026-02-12 at 15.42.17 (1).jpeg",
  "/img/Obras/Carrusel2/WhatsApp Image 2026-02-12 at 15.42.19.jpeg",
  "/img/Obras/Carrusel2/WhatsApp Image 2026-02-12 at 15.42.23.jpeg",
  "/img/Obras/Carrusel2/WhatsApp Image 2026-02-12 at 15.42.30.jpeg",
  "/img/Obras/Carrusel2/WhatsApp Image 2026-02-10 at 22.37.45.jpeg",
];

const Obras = () => {
  return (
    <section className="pt-5 pb-5">
      <Container>
        <h1 className="footer-titulo text-center display-4">
          Nuestra trayectoria
        </h1>
      </Container>
      <h5 className="obras-subtitulo text-white mt-3">
        Nuestras obras hablan por sí mismas. Con años de experiencia, hemos
        dejado una huella en cada proyecto, reflejando el compromiso con la
        calidad y la dedicación en las entregas.
      </h5>
      <div className="carrusel-container mt-4">
        <div className="carrusel-track">
          {fotos1.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Obra ${i + 1}`}
              className="carrusel-img"
            />
          ))}
          {fotos1.map((src, i) => (
            <img
              key={`dup-${i}`}
              src={src}
              alt={`Obra ${i + 1}`}
              className="carrusel-img"
            />
          ))}
        </div>
      </div>

      <div className="carrusel-container mt-4">
        <div className="carrusel-track carrusel-track-reverse">
          {fotos2.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Obra ${i + 1}`}
              className="carrusel-img"
            />
          ))}
          {fotos2.map((src, i) => (
            <img
              key={`dup-${i}`}
              src={src}
              alt={`Obra ${i + 1}`}
              className="carrusel-img"
            />
          ))}
        </div>
      </div>

      <h2 className="footer-titulo text-center display-6 mt-4">
        Algunos de nuestros trabajos
      </h2>

      <Container className="mt-5">
        {rubros.map((rubro, index) => {
          const esImpar = index % 2 === 0;
          return (
            <div key={rubro.nombre}>
              {index > 0 && <hr className="footer-hr my-4" />}
              <Row className="align-items-center my-4">
                <Col
                  md={6}
                  className={`mb-3 mb-md-0 ${esImpar ? "order-1" : "order-1 order-md-2"}`}
                >
                  <div
                    className={`rubro-galeria rubro-galeria-${rubro.video ? 1 : rubro.imgs.length}`}
                  >
                    {rubro.video ? (
                      <video
                        src={rubro.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className={`rubro-galeria-img ${rubro.videoClass || ""}`}
                      />
                    ) : (
                      rubro.imgs.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={`${rubro.nombre} ${i + 1}`}
                          className={`rubro-galeria-img ${rubro.imgClass || ""}`}
                        />
                      ))
                    )}
                  </div>
                </Col>
                <Col
                  md={6}
                  className={esImpar ? "order-2" : "order-2 order-md-1"}
                >
                  <h3 className="rubro-titulo footer-titulo">{rubro.nombre}</h3>
                  <ul className="rubro-lista">
                    {rubro.obras.map((obra, i) => (
                      <li key={i}>
                        {obra.includes(":") ? (
                          <>
                            <span style={{ color: "#ffffff" }}>
                              {obra.split(":")[0]}:
                            </span>
                            <span style={{ color: "#adadb2" }}>
                              {obra.split(":").slice(1).join(":")}
                            </span>
                          </>
                        ) : (
                          obra
                        )}
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export default Obras;
