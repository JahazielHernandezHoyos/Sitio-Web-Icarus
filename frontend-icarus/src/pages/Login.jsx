//componentes
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const login = () => {
  return (
    <>
      <Navbar />
      <div class="mt-5 py-5 col-md-10 mx-auto col-lg-5">
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
          <input
            type="password"
            class="text-white bg-dark form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">
          Sign up
        </button>
        <small class="my-4 text-muted">
          By clicking Sign up, you agree to the terms of use.
        </small>
      </form>
      </div>
      <Footer/>
    </>
  );
};

export default login;
