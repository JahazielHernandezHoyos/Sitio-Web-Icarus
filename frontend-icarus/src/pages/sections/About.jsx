import codeimg from "../../assets/img/code.svg";
import design from "../../assets/img/pen-tool.svg";
import smartphone from "../../assets/img/smartphone.svg";
import Gsap from "../../components/Gsap";

const About = ({language}) => {
  Gsap();
  return (
    <>
      <h1 id="About" className="text-center mt-5 py-5">
        {language === "es" ? "Sobre nosotros" : "About us"}
      </h1>
      <p className="px-5 text-center">
        {language === "es"
            ? "Somos una empresa dedicada al desarrollo de software, la cual busca impulsar a las empresas y particulares, a través de la digitalización, siempre ofreciendo una calidad excelente a un precio asequible."
            : "We are a company dedicated to software development, which seeks to promote companies and individuals, through digitization, always offering excellent quality at an affordable price."
        }
      </p>
      <div className="box1 col-xxl-12 row">
        <div className=" p-5 text-center col-lg-4">
          <img
            className="m-5 bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            src={design}
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            alt=""
          ></img>

          <h4>
            {language === "es"
                ? "Diseños originales, modernos y acordes con tu marca"
                : "Original, modern designs in line with your brand"
            }
          </h4>
          <p className="lead">
            {language === "es"
                ? "Planificamos, diseñamos y montamos páginas web y/o aplicaciones, acorde con las necesidades de tu negocio. Aplicamos colores, estilos, conceptos, tipografías y el logo de tu marca, ofreciendo una gran personalización."
                : "We plan, design and assemble web pages and/or applications, according to the needs of your business. We apply colors, styles, concepts, fonts and your brand's logo, offering great customization."
            }
          </p>
          <p>
            {/* <a className="btn btn-secondary" href="#">
              View details »
            </a> */}
          </p>
        </div>

        <div className="box2 p-5 text-center col-lg-4">
          <img
            className="m-5 bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            src={smartphone}
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            alt=""
          ></img>

          <h4>
            {language === "es"
                ? "A la medida de tus necesidades"
                : "Tailored to your needs"
            }
          </h4>
          <p className="lead">
            {language === "es"
                ? "El diseño depende del tamaño y los objetivos del negocio. Ofrecemos la posibilidad de crear software para tiendas, bares, eventos organizados y hasta para autónomos o 'freelancers'. Ofrecemos multitud de servicios, que impulsarán la visualización de tu negocio o tu imagen personal: animaciones, conectividad entre plataformas, sistemas de venta... ¡El límite es tu imaginación!"
                : "The design depends on the size and goals of the business. We offer the possibility of creating software for shops, bars, organized events and even for freelancers. We offer a multitude of services that will boost the visualization of your business or your personal image: animations, connectivity between platforms, sales systems... The limit is your imagination!"
            }
          </p>
          <p>
            {/* <a className="btn btn-secondary" href="#">
              View details »
            </a> */}
          </p>
        </div>

        <div className="box3 p-5 text-center col-lg-4">
          <img
            className="m-5 bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            src={codeimg}
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            alt=""
          ></img>

          <h4>
          {language === "es"
                ? "Alojamiento y actualizaciones"
                : "Hosting and upgrades"
            }
            </h4>
          <p className="lead">
          {language === "es"
                ? "No se preocupe por el alojamiento de su sitio, nosotros lo hacemos por usted. Nuestro compromiso es garantizar un correcto funcionamiento del producto vendido, tanto en actualizaciones como en funcionamiento continuo"
                : "Don't worry about hosting your site, we do it for you. Our commitment is to guarantee the correct functioning of the product sold, both in updates and in continuous operation."
            }
            
          </p>
          <p>
            {/* <a className="btn btn-secondary" href="#">
              View details »
            </a> */}
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
