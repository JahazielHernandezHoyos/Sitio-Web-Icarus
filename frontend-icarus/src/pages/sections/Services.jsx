import monitor from "../../assets/img/monitor.svg";
import globe from "../../assets/img/globe.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {

  gsap.fromTo(
    ".servicio1",
    {
      autoAlpha: 0,
    },
    {
      duration: 1,
      autoAlpha: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".servicio1",
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
    }
  );


  return (
    <>
      <h1 id="Services" class="text-center mt-5 py-3">
        Services
      </h1>
      <div class="container col-xxl-8 px-4 py-5 ">
        <div class="servicio1 row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src={globe}
              class="d-block mx-lg-auto img-fluid imagenGsap"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="containerGsap col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Web development</h1>
            <p class="lead py-5">
              From small and simple pages to large and complex ecommerce.
              Includes host. If you do not have a website, your competition
              takes your customers.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <a
                href="#Contact"
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Get it now
              </a>
            </div>
          </div>
        </div>

        <div class="servicio2 row flex-lg-row align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src={monitor}
              class="d-block mx-lg-auto img-fluid imagenGsap"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="containerGsap col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Desktop applications</h1>
            <p class="lead py-5">
              It is the one that is installed on the computer or storage system
              (USB) and we can run it without internet in our operating system
              in case you need your system to continue working without internet.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <a
                href="#Contact"
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
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
