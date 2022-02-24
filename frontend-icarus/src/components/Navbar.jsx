import React from "react";
import Logo from "../assets/img/Logo.png";

const Navbar = () => {
  return (
    <>
      <header className="py-5 mb-auto">
        <nav className="navbar nav-masthead justify-content-center float-md-end navbar-expand-lg navbar-dark fixed-top" style={{background: "#0d0d0dda"}} >
          <div className="container-fluid">
            <a className="float-md-start ms-5 navbar-brand" href="/">
              <img
                src={Logo}
                alt="Icarus Logo"
                width="50"
                height="50"
                className="d-inline-block align-text-top"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#About">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#Services">
                    Services
                  </a>
                </li>
              </ul>
              <a className="btn btn-primary text-white nav-link me-5 button-text" href="/#Contact">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
