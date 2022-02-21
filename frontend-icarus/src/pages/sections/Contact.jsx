const Contact = () => {
  return (
    <>
      <div id="Contact" class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 mb-3 m-5">Contact us</h1>
            <p class="col-lg-10 fs-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate quidem rerum tenetur suscipit debitis quo vero ab, magni
              nostrum fugiat autem aliquid voluptates cumque aspernatur!
              Officiis qui temporibus nam assumenda..
            </p>
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
