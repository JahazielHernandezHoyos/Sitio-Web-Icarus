import Gsap from "../../components/Gsap";

const Services = () => {
  return (
    <>
      <Gsap />

      <div class="container col-xxl-8 px-4 py-5 ">
        <div class="servicio1 row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="https://cdn.pixabay.com/photo/2017/03/17/06/27/seo-2151033_960_720.png"
              class="d-block mx-lg-auto img-fluid imagenGsap"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="containerGsap col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Design responsive</h1>
            <p class="lead py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              alias quidem tenetur accusamus aut quod fugiat id est dolorum,
              recusandae reiciendis fuga iusto numquam tempore eos
              necessitatibus at nam consectetur.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Hire
              </button>
            </div>
          </div>
        </div>

        <div class="servicio2 row flex-lg-row align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg"
              class="d-block mx-lg-auto img-fluid imagenGsap"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="containerGsap col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Desktop applications</h1>
            <p class="lead py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              alias quidem tenetur accusamus aut quod fugiat id est dolorum,
              recusandae reiciendis fuga iusto numquam tempore eos
              necessitatibus at nam consectetur.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Hire
              </button>
            </div>
          </div>
        </div>

        <div class="servicio3 row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_960_720.jpg"
              class="d-block mx-lg-auto img-fluid imagenGsap"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="containerGsap col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Web development</h1>
            <p class="lead py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              alias quidem tenetur accusamus aut quod fugiat id est dolorum,
              recusandae reiciendis fuga iusto numquam tempore eos
              necessitatibus at nam consectetur.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Hire
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;