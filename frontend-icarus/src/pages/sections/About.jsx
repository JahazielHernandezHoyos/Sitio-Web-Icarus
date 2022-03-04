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
            ? "Somos una empresa de desarrollo de software que busca entregarte un espacio para tu negocio en la Web a buen precio y excelente calidad ofrecimiento..."
            : "We are a software development company that seeks to deliver and give you a space for your online business at a good price and excellent quality offering..."
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
                ? "Diseño original y con el contenido de tu marca"
                : "Original design and with the content of your brand"
            }
          </h4>
          <p className="lead">
            {language === "es"
                ? "Planificamos y construimos desde landing pages, home pages, ecommerce, blogs y cualquier otra página que sea necesaria. Además, aplicamos el concepto, colores, tipografía y logo de tu marca a tu página. Si no tienes imágenes o textos podemos desarrollar tu contenido."
                : "We plan and build from landing pages, home pages, product pages to blogs and any other page that is necessary. In addition, we apply the concept, colors, typography and logo of your brand to your page. If you do not have images or texts we can develop your content."
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
                ? "A la medida de sus necesidades"
                : "Tailored to your needs"
            }
          </h4>
          <p className="lead">
            {language === "es"
                ? "El diseño de una página web depende del tamaño y objetivos del negocio. Puede ser una página de servicio o una tienda online. El alcance puede variar dependiendo del tamaño, número de servicios y páginas internas, de las funcionalidades que necesites como: animaciones, calculadoras, integraciones con formularios, carrito de compras. ¡El límite es la imaginación!"
                : "The design of a web page depends on the size and objectives of the business. It can be a service page or an online store. The scope of may vary depending on the size, number of services and internal pages, of the functionalities you need such as: animations, calculators, integrations with forms, shopping cart, the limit is the imagination!"
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
                ? "Hosting y actualizaciones de versiones"
                : "Hosting and version upgrades"
            }
            </h4>
          <p className="lead">
          {language === "es"
                ? "No se preocupe por el hosting de su sitio, nosotros lo hacemos por usted. Nuestro compromiso es garantizar que siempre tenga su sitio web en funcionamiento y con todas las versiones actualizadas, en cuanto a contenido y software."
                : "Don't worry about hosting your site, we do it for you. Our commitment is to guarantee that you always have your website on the air and with all the updated versions, in terms of content manager and software."
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
