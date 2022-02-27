import codeimg from "../../assets/img/code.svg";
import design from "../../assets/img/pen-tool.svg";
import smartphone from "../../assets/img/smartphone.svg";
import info from "../../assets/img/alert-circle.svg";
import Gsap from "../../components/Gsap";

const About = () => {
  Gsap();
  return (
    <>
      <h1 id="About" className="text-center mt-5 py-5">
        Sobre nosotros
      </h1>
      <p className="p-5 text-center">
        Somos una empresa de desarrollo de software que busca entregarte un
        espacio para tu negocio en la Web a buen precio y excelente calidad
        ofrecimiento...
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

          <h4>Diseño original y con el contenido de tu marca</h4>
          <p className="lead">
            Planificamos y construimos desde landing pages, home pages,
            ecommerce, blogs y cualquier otra página que sea necesaria. Además,
            aplicamos el concepto, colores, tipografía y logo de tu marca a tu
            página. Si no tienes imágenes o textos podemos desarrollar tu
            contenido.
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

          <h4>A la medida de sus necesidades</h4>
          <p className="lead">
            El diseño de una página web depende del tamaño y objetivos del
            negocio. Puede ser una página de servicio o una tienda online. El
            alcance puede variar dependiendo del tamaño, número de servicios y
            páginas internas, de las funcionalidades que necesites como:
            animaciones, calculadoras, integraciones con formularios, carrito de
            compras. ¡El límite es la imaginación!
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

          <h4>Hosting y actualizaciones de versiones</h4>
          <p className="lead">
            No se preocupe por el hosting de su sitio, nosotros lo hacemos por usted. Nuestro compromiso es garantizar que siempre tenga su sitio web en funcionamiento y con todas las versiones actualizadas, en cuanto a contenido y software.
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
