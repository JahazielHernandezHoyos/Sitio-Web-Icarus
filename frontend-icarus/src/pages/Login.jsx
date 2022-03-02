//componentes
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const login = () => {
  return (
    <>
      <Navbar />
      <div className="mt-5 py-5 col-md-10 mx-auto col-lg-5">
        <form className="bg-dark p-4 p-md-5 border rounded-3 bg-light">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="text-white bg-dark form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="text-white bg-dark form-control"
              id="floatingPassword"
              placeholder="Contraseña"
            />
            <label for="floatingPassword">Contraseña</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Recordar contraseña
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Registrarse
          </button>
          <small className="my-4 text-muted">
            Al hacer clic en Registrarse, acepta los términos de uso.
          </small>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default login;
