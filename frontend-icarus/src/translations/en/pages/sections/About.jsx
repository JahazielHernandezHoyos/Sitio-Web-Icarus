import codeimg from "../../assets/img/code.svg";
import design from "../../assets/img/pen-tool.svg";
import smartphone from "../../assets/img/smartphone.svg";
import info from "../../assets/img/alert-circle.svg"
import Gsap from "../../components/Gsap";

const About = () => {
  Gsap();
  return (
    <>
      <h1 id="About" className="text-center mt-5 py-5">
        About
      </h1>
      <p className="p-5 text-center">
        We are a software development company that seeks to deliver and give you
        a space for your online business at a good price and excellent quality
        offering...
        
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

          <h4>Original design and with the content of your brand</h4>
          <p className="lead">
            We plan and build from landing pages, home pages, product pages to
            blogs and any other page that is necessary. In addition, we apply
            the concept, colors, typography and logo of your brand to your page.
            If you do not have images or texts we can develop your content.
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

          <h4>Tailored to your needs</h4>
          <p className="lead">
            The design of a web page depends on the size and objectives of the
            business. It can be a service page or an online store. The scope of
            may vary depending on the size, number of services and internal
            pages, of the functionalities you need such as: animations,
            calculators, integrations with forms, shopping cart, the limit is
            the imagination!
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

          <h4>Hosting and version upgrades</h4>
          <p className="lead">
            Don't worry about hosting your site, we do it for you. Our
            commitment is to guarantee that you always have your website on the
            air and with all the updated versions, in terms of content manager
            and software.
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
