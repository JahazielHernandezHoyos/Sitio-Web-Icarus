const Slider = () => {
  return (
    <section className="banner text-center">
      <div className="banner-content">
        <div className="row py-lg-5 ">
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
              {`${localStorage.idioma === "es" ? 
                  "La digitalización está cada vez más presente en la vida de la sociedad y nosotros te brindamos esta oportunidad." : 
                  "Digitization is increasingly present in the life of the entire society."
                  }`}
                
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
                {`${localStorage.idioma === "es" ? 
                  "Sobre nosotros" : 
                  "About us"
                  }`}
                  
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
