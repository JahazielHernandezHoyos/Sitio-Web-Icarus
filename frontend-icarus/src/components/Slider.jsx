const Slider = ({language}) => {
  return (
    <section className="banner text-center">
      <div className="banner-content">
        <div className="">
          <div className="containerGsap mx-auto">
            <div className="">
              <div className="headerGsap text-center mb-4">
                <h1 className="display-2 fw-bold lh-4">Icarus</h1>
                <h1
                  className="display-2 fw-bold lh-4"
                  style={{ color: "#f2d027" }}
                >
                  Solutions
                </h1>
              </div>

              <p className="headerGsap lead text-sec text-break m-4">
              {language === "es"? "La digitalización es un importante paso para las empresas. Deja que te ayudemos con ello." 
                                  : "Digitization is an important step for companies. Let us help you with it."}
                
              </p>
              {/* <img
                      className="headerGsap text-center col-auto mx-5 bd-placeholder-img rounded-circle img-fluid"
                      width="200"
                      height="200"
                      src={users}
                      role="img"
                      aria-label="Placeholder: 140x140"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                      alt=""
                    /> */}
              <p className="headerGsap lead">
                <a href="#About" className="me-3 btn btn-primary button-text">
                {language === "es"? "Sobre nosotros" 
                                  : "About us"}
                  
                </a>
                {/* <button href="#" className="ms-3 btn btn-secondary button-text">
                  View on Github
                </button> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
