import githubIMG from "../assets/img/github.svg";
import instagramIMG from "../assets/img/instagram.svg";

const Footer = () => {
  //pedir año actual para el copyright
  const year = new Date().getFullYear();

  return (
    <footer className="sticky-bottom py-5 container">
      <div className="mx-auto py-3" style={{ width: "90px" }}>
        <img className="px-1" src={githubIMG} href="/"/>
        <img className="px-1" src={instagramIMG} href="/"/>
      </div>
      <p className="text-center lead">
        © {year} Icarus Solutions. Todos los derechos reservados.
        {/* <a href="#">Privacy</a> ·{" "}
        <a href="#">Terms</a> */}
      </p>
    </footer>
  );
};

export default Footer;
