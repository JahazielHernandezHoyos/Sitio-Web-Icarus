import logo from "../../assets/img/Logo.png";

const Contact = () => {
  return (
    <>
      <div id="Contact" class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-7 text-center text-lg-start">
            <h3 class="display-4 text-center fw-bold lh-1 mb-5">
              Contact us
            </h3>
            <p class="col-lg fs-4 text-center">
              Contact us for your consultation and request your budget without
              commitments.
            </p>
            <img
              class="mx-auto m-3 d-block"
              width="200"
              height="200"
              src={logo}
              role="img"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            ></img>
          </div>
          <div class="col-md-10 mx-auto col-lg-5">
            <form class="bg-dark p-4 p-md-5 border rounded-3 bg-light">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="text-white bg-dark form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <textarea
                  style={{ height: "120px" }}
                  type="Message"
                  class="text-white bg-dark form-control"
                  aria-label="With textarea"
                  id="Message"
                  placeholder="Message"
                ></textarea>
                <label for="Message">Message</label>
              </div>
              <button class="w-100 btn btn-lg btn-primary" type="submit">
                Submit
              </button>
              <a
                class="lead w-100 mt-2 btn btn-lg btn-success"
                type="button"
                href="https://api.whatsapp.com/send/?phone=+17073165463"
              >
                Contact WhatsApp
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
