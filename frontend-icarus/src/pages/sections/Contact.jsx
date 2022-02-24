import logo from "../../assets/img/Logo.png";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_j5635iu", "template_ks7t69l", e.target, "user_n7RfnKQlZUHGXNYthJREV",).then(res => {
      console.log(res)
      window.alert("Message sent successfully");
    }).catch(err=> console.log(err));
  }
  return (
    <>
      <div id="Contact" className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-5 text-center text-lg-start">
            <h3 className="display-4 text-center fw-bold lh-1 mb-5">Contact us</h3>
            <p className="col-lg fs-4 text-center">
              Contact us for your consultation and request your budget without
              commitments.
            </p>
            <img
              className="mx-auto m-3 d-block"
              width="200"
              height="200"
              src={logo}
              role="img"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              alt=""
            ></img>
          </div>
          <div className="col-md-10 mx-auto col-lg-7">
            <form
              className="bg-dark p-4 p-md-5 border rounded-3 bg-light"
              onSubmit={sendEmail}
            >
              <div className="form-floating mb-3">
                <input
                  name="name"
                  type="text"
                  className="text-white bg-dark form-control"
                  id="floatingInput"
                  placeholder="Name"
                />
                <label htmlFor="floatingInput">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  name="email"
                  type="email"
                  className="text-white bg-dark form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  name="Business"
                  type="text"
                  className="text-white bg-dark form-control"
                  id="floatingInput"
                  placeholder="Business"
                />
                <label htmlFor="floatingInput">Business</label>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  name="Message"
                  style={{ height: "120px" }}
                  type="Message"
                  className="text-white bg-dark form-control"
                  aria-label="With textarea"
                  id="Message"
                  placeholder="Message"
                ></textarea>
                <label htmlFor="Message">Message</label>
              </div>
              <button
                className="w-100 btn btn-lg btn-primary"
                type="submit"
                value="Send"
              >
                Submit
              </button>
              <a
                className="lead w-100 mt-2 btn btn-lg btn-success"
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
