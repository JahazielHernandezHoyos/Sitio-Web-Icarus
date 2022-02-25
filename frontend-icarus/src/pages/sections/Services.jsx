import monitor from "../../assets/img/monitor.svg";
import globe from "../../assets/img/globe.svg";
import Gsap from "../../components/Gsap";

const Services = () => {
  Gsap();
  return (
    <>
      <h1 id="Services" className="display-5 fw-bold lh-1 text-center mt-5 mb-5">
        Services
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
            <h3 className="mb-3">Web development</h3>
            <p className="lead py-5">
              From small and simple pages to large and complex ecommerce.
              Includes host. If you do not have a website, your competition
              takes your customers.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a
                href="#Contact"
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Get it now
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
              Desktop applications
            </h3>
            <p className="lead py-5">
              It is the one that is installed on the computer or storage system
              (USB) and we can run it without internet in our operating system
              in case you need your system to continue working without internet.
            </p>
            <div className=" d-grid gap-2 d-md-flex justify-content-md-end">
              <a
                href="#Contact"
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Get it now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
