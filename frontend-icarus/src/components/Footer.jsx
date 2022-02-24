const Footer = () => {

  //pedir año actual para el copyright
  const year = new Date().getFullYear();

  return (
    <footer className="py-5 container">
      <p className="text-center lead">
        © {year} Icarus Solutions. All rights reserved.
        {/* <a href="#">Privacy</a> ·{" "}
        <a href="#">Terms</a> */}
      </p>
    </footer>
  );
};

export default Footer;
