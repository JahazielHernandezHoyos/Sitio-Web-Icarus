import monitor from "../../assets/img/monitor.svg";
import globe from "../../assets/img/globe.svg";
import Gsap from "../../components/Gsap";

const Services = ({language}) => {
  Gsap();
  return (
    <>
      <h1
        id="Services"
        className="display-5 fw-bold lh-1 text-center mt-5 mb-5"
      >
        {`${localStorage.idioma === "es" ? "Servicios" : "Services"}`}
      </h1>
      <div className="container col-xxl-8 px-4">
        <div className=" row flex-lg-row-reverse align-items-center g-5">
          <div className="imgGsap1 col-10 col-sm-8 col-lg-6">
            <img
              src={globe}
              className="d-block mx-lg-auto img-fluid"
              width="300"
              height="300"
              loading="lazy"
              alt="globe"
            />
          </div>
          <div className="servicio1 containerGsap col-lg-6">
            <h3 className="mb-3">
              {language === "es"
                  ? "Sitios Web"
                  : "Web development"
              }
            </h3>
            <p className="lead py-5">
              {language === "es"
                  ? "Desarrollamos páginas web personalizadas, con garantía de funcionamiento y calidad, sin importar el tamaño (desde sencillas páginas de presentación, hasta grandes estructuras, como las de ecommerce). El alojamiento está incluído con nosotros, además del dominio y todos los elementos necesarios para causar una buena impresión (certificado SSL, protección Anti-DDOS)"
                  : "We develop personalized web pages, with performance and quality guarantees, regardless of size (from simple presentation pages, to large structures, such as e-commerce). Hosting is included with us, in addition to the domain and all the necessary elements to make a good impression (SSL certificate, Anti-DDOS protection)"
              }
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a
                href="#Contact"
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                {language === "es"
                    ? "Consiguelo ahora"
                    : "Get it now"
                }
              </a>
            </div>
          </div>
        </div>

        <div className="row flex-lg-row align-items-center g-5 py-5">
          <div className=" col-10 col-sm-8 col-lg-6">
            <img
              src={monitor}
              className="imgGsap2 d-block mx-lg-auto img-fluid"
              width="300"
              height="300"
              loading="lazy"
              alt="monitor"
            />
          </div>
          <div className="servicio2 containerGsap col-lg-6">
            <h3 className="mb-3">
              {language === "es"
                  ? "Aplicaciones de escritorio"
                  : "Desktop applications"
              }
            </h3>
            <p className="lead py-5">
              {language === "es"
                  ? "Creamos aplicaciones para ser usadas a través del ordenador. Sus usos pueden depender de las necesidades (aplicación de contabilidad, registros de transacciones, organización de proyectos...). Pueden funcionar con o sin Internet, lo que permite una mayor versatilidad en sus usos prácticos."
                  : "We create applications to be used through the computer. Its uses can depend on the needs (accounting application, transaction records, project organization...). They can work with or without the Internet, which allows greater versatility in their practical uses."
              }
            </p>
            <div className=" d-grid gap-2 d-md-flex justify-content-md-end">
              <a
                href="#Contact"
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                {language === "es"
                    ? "Consiguelo ahora"
                    : "Get it now"
                }
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
