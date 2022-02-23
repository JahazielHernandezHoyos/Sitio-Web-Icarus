import codeimg from "../../assets/img/code.svg";
import design from "../../assets/img/pen-tool.svg";
import smartphone from "../../assets/img/smartphone.svg";
import info from "../../assets/img/alert-circle.svg"

const About = () => {
  return (
    <>
      <h1 id="About" class="text-center mt-5 py-5">
        About
      </h1>
      <img class="col-auto bd-placeholder-img rounded-circle"
            width="50"
            height="50"
            src={info}
            role="img"
            aria-label="Placeholder: 100x100"
            preserveAspectRatio="xMidYMid slice"
            focusable="false">
      </img>
      <p class="m-3 mx-5 px-5 text-center">
        We are a software development company that seeks to deliver and give you
        a space for your online business at a good price and excellent quality
        offering...
        
      </p>

      <div class="col-xxl-12 px-4 py-5 row">
        <div class=" p-5 text-center col-lg-4">
          <img
            class="m-5 bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            src={design}
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          ></img>

          <h2>Original design and with the content of your brand</h2>
          <p class="lead">
            We plan and build from landing pages, home pages, product pages to
            blogs and any other page that is necessary. In addition, we apply
            the concept, colors, typography and logo of your brand to your page.
            If you do not have images or texts we can develop your content.
          </p>
          <p>
            {/* <a class="btn btn-secondary" href="#">
              View details »
            </a> */}
          </p>
        </div>

        <div class="p-5 text-center col-lg-4">
          <img
            class="m-5 bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            src={smartphone}
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          ></img>

          <h2>Tailored to your needs</h2>
          <p class="lead">
            The design of a web page depends on the size and objectives of the
            business. It can be a service page or an online store. The scope of
            may vary depending on the size, number of services and internal
            pages, of the functionalities you need such as: animations,
            calculators, integrations with forms, shopping cart, the limit is
            the imagination!
          </p>
          <p>
            {/* <a class="btn btn-secondary" href="#">
              View details »
            </a> */}
          </p>
        </div>

        <div class=" p-5 text-center col-lg-4">
          <img
            class="m-5 bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            src={codeimg}
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          ></img>

          <h2>Hosting and version upgrades</h2>
          <p class="lead">
            Don't worry about hosting your site, we do it for you. Our
            commitment is to guarantee that you always have your website on the
            air and with all the updated versions, in terms of content manager
            and software.
          </p>
          <p>
            {/* <a class="btn btn-secondary" href="#">
              View details »
            </a> */}
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
